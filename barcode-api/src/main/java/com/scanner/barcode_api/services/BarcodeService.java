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

        Files.delete(path);
        log.info("🗑️ Arquivo local deletado após upload: {}", path);

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

        return new ScannerFileDto(finalFilename, createdAt, allBarcodes);
    }

    public List<ScannerFileDto> listScannerFilesWithBarcodes() throws IOException {
        Path dir = Paths.get(DIRECTORY);

        if (!Files.exists(dir)) {
            log.warn("⚠️ Pasta de scanner-files não encontrada.");
            return List.of();
        }

        try (Stream<Path> stream = Files.list(dir)) {
            List<ScannerFileDto> result = stream
                    .filter(Files::isRegularFile)
                    .map(path -> {
                        try {
                            String filename = path.getFileName().toString();

                            FileTime creationTime = (FileTime) Files.getAttribute(path, "creationTime");
                            LocalDateTime createdAt = creationTime
                                    .toInstant()
                                    .atZone(ZoneId.systemDefault())
                                    .toLocalDateTime();

                            List<String> barcodes = Files.readAllLines(path)
                                    .stream()
                                    .map(String::trim)
                                    .filter(s -> !s.isEmpty())
                                    .collect(Collectors.toList());

                            log.debug("📄 Arquivo processado: {} ({} barcodes)", filename, barcodes.size());

                            return new ScannerFileDto(filename, createdAt, barcodes);
                        } catch (IOException e) {
                            log.error("❌ Erro ao ler arquivo: {}", path, e);
                            return null;
                        }
                    })
                    .filter(Objects::nonNull)
                    .collect(Collectors.toList());

            log.info("📁 Total de arquivos de scanner lidos: {}", result.size());
            return result;
        }
    }
}
