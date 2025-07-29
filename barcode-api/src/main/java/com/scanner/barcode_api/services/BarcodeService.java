package com.scanner.barcode_api.services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.scanner.barcode_api.dtos.ScannerFileDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.FileTime;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Slf4j
@RequiredArgsConstructor
public class BarcodeService {

    private final Cloudinary cloudinary;

    private static final String DIRECTORY = "./scanner-files";

    public ScannerFileDto addBarcodes(String filenameWithoutExtension, List<String> barcodes) throws IOException {
        String finalFilename = filenameWithoutExtension + ".csv";
        Path path = Paths.get(DIRECTORY, finalFilename);

        Files.createDirectories(path.getParent());
        log.debug("📂 Diretório verificado/criado: {}", path.getParent());

        List<String> sanitized = barcodes.stream()
                .map(String::trim)
                .filter(b -> !b.isEmpty())
                .toList();

        Files.write(
                path,
                sanitized.stream()
                        .map(b -> b + System.lineSeparator())
                        .collect(Collectors.toList()),
                StandardOpenOption.CREATE,
                StandardOpenOption.APPEND
        );

        log.info("📝 {} barcodes adicionados ao arquivo: {}", sanitized.size(), finalFilename);

        Map<?, ?> uploadResult = cloudinary.uploader().upload(path.toFile(), ObjectUtils.asMap(
                "resource_type", "raw",
                "folder", "scanner-files"
        ));
        String cloudinaryUrl = (String) uploadResult.get("secure_url");
        log.info("☁️ Arquivo '{}' enviado para Cloudinary: {}", finalFilename, cloudinaryUrl);

        FileTime creationTime = (FileTime) Files.getAttribute(path, "creationTime");
        LocalDateTime createdAt = creationTime
                .toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();

        List<String> allBarcodes = Files.readAllLines(path)
                .stream()
                .map(String::trim)
                .filter(b -> !b.isEmpty())
                .collect(Collectors.toList());

        Files.delete(path);
        log.info("🗑️ Arquivo local deletado após upload: {}", path);

        return new ScannerFileDto(finalFilename, createdAt, allBarcodes);
    }


    public List<ScannerFileDto> listScannerFilesWithBarcodes() throws IOException {
        List<ScannerFileDto> result = new ArrayList<>();

        // 1. Listar arquivos locais (opcional, se desejar manter)
        Path dir = Paths.get(DIRECTORY);
        if (Files.exists(dir)) {
            try (Stream<Path> stream = Files.list(dir)) {
                List<ScannerFileDto> localFiles = stream
                        .filter(Files::isRegularFile)
                        .map(path -> {
                            try {
                                String filename = path.getFileName().toString();
                                FileTime creationTime = (FileTime) Files.getAttribute(path, "creationTime");
                                LocalDateTime createdAt = creationTime
                                        .toInstant()
                                        .atZone(ZoneId.systemDefault())
                                        .toLocalDateTime();
                                List<String> barcodes = Files.readAllLines(path).stream()
                                        .map(String::trim)
                                        .filter(s -> !s.isEmpty())
                                        .collect(Collectors.toList());
                                log.debug("📄 Arquivo local processado: {} ({} barcodes)", filename, barcodes.size());
                                return new ScannerFileDto(filename, createdAt, barcodes);
                            } catch (IOException e) {
                                log.error("❌ Erro ao ler arquivo local: {}", path, e);
                                return null;
                            }
                        })
                        .filter(Objects::nonNull)
                        .toList();
                result.addAll(localFiles);
            }
        }

        // 2. Listar arquivos no Cloudinary
        try {
            Map<String, Object> cloudinaryResponse = cloudinary.search()
                    .expression("folder:scanner-files AND resource_type:raw")
                    .sort_by("created_at", "desc")
                    .max_results(100)
                    .execute();

            List<Map<String, Object>> resources = (List<Map<String, Object>>) cloudinaryResponse.get("resources");

            for (Map<String, Object> resource : resources) {
                String filename = (String) resource.get("filename");
                String secureUrl = (String) resource.get("secure_url");
                String createdAtStr = (String) resource.get("created_at");
                LocalDateTime createdAt = LocalDateTime.parse(createdAtStr.replace("Z", "")).atZone(ZoneId.of("UTC")).withZoneSameInstant(ZoneId.systemDefault()).toLocalDateTime();

                // (Opcional) baixar CSV temporariamente e ler barcodes
                List<String> barcodes = fetchBarcodesFromCloudinaryUrl(secureUrl);
                result.add(new ScannerFileDto(filename + ".csv", createdAt, barcodes));
            }

            log.info("☁️ Total de arquivos no Cloudinary: {}", resources.size());
        } catch (Exception e) {
            log.error("❌ Erro ao listar arquivos do Cloudinary", e);
        }

        return result;
    }

}
