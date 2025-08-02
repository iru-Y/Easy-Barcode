package org.typer.easy.core;

import java.awt.*;
import java.awt.event.KeyEvent;
import java.io.IOException;
import java.net.URI;
import java.net.http.*;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class BarcodeTyper {

    public List<Map<String, Object>> fetchBarcodesFromApi(String apiUrl) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(URI.create(apiUrl)).GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            throw new IOException("Erro ao buscar dados da API: Código " + response.statusCode());
        }

        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(response.body(), new TypeReference<List<Map<String, Object>>>() {});
    }

    public String selectFilename(List<String> filenames) {
        try (var scanner = new java.util.Scanner(System.in)) {
            int selectedIndex = 0;
            while (true) {
                System.out.println("\nSelecione o arquivo usando números e Enter:");
                for (int i = 0; i < filenames.size(); i++) {
                    String prefix = (i == selectedIndex) ? ">" : " ";
                    System.out.printf("%s %d: %s%n", prefix, i + 1, filenames.get(i));
                }
                System.out.print("Digite o número do arquivo: ");
                try {
                    int choice = Integer.parseInt(scanner.nextLine()) - 1;
                    if (choice >= 0 && choice < filenames.size()) {
                        selectedIndex = choice;
                        break;
                    }
                } catch (NumberFormatException ignored) {}
                System.out.println("Entrada inválida, tente novamente.");
            }
            System.out.println("Arquivo selecionado: " + filenames.get(selectedIndex));
            return filenames.get(selectedIndex);
        }
    }

    public void digitarCodigos(List<String> codigos) throws AWTException, InterruptedException {
        Robot robot = new Robot();
        System.out.println("Posicione o cursor no campo de edição. Começando em 5s...");
        Thread.sleep(5000);

        for (String codigo : codigos) {
            typeString(robot, codigo);
            pressEnter(robot);
            Thread.sleep(1000);
            Thread.sleep(100);
        }
    }

    private void typeString(Robot robot, String s) {
        for (char c : s.toCharArray()) {
            typeChar(robot, c);
            robot.delay(50);
        }
    }

    private void typeChar(Robot robot, char c) {
        boolean upperCase = Character.isUpperCase(c);
        int keyCode = KeyEvent.getExtendedKeyCodeForChar(c);

        if (keyCode == KeyEvent.VK_UNDEFINED) {
            System.err.println("Caractere não suportado: " + c);
            return;
        }

        if (upperCase) {
            robot.keyPress(KeyEvent.VK_SHIFT);
        }

        robot.keyPress(keyCode);
        robot.keyRelease(keyCode);

        if (upperCase) {
            robot.keyRelease(KeyEvent.VK_SHIFT);
        }
    }

    private void pressEnter(Robot robot) {
        robot.keyPress(KeyEvent.VK_ENTER);
        robot.keyRelease(KeyEvent.VK_ENTER);
    }
}
