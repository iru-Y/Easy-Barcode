import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Barcode Typer',
      home: BarcodeHome(),
    );
  }
}

class BarcodeHome extends StatefulWidget {
  const BarcodeHome({super.key});

  @override
  State<BarcodeHome> createState() => _BarcodeHomeState();
}

class _BarcodeHomeState extends State<BarcodeHome> {
  String apiUrl = "http://localhost:8080/barcode";
  List<dynamic> data = [];
  String? selectedFilename;
  List<String> selectedBarcodes = [];

  bool loading = false;

  @override
  void initState() {
    super.initState();
    fetchBarcodes();
  }

  Future<void> fetchBarcodes() async {
    setState(() => loading = true);
    try {
      final response = await http.get(Uri.parse(apiUrl));
      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);
        setState(() {
          data = decoded;
        });
      } else {
        throw Exception("Erro na API: ${response.statusCode}");
      }
    } catch (e) {
      print("Erro ao buscar dados: $e");
    }
    setState(() => loading = false);
  }

  void selectFilename(String filename) {
    setState(() {
      selectedFilename = filename;
      selectedBarcodes = data
          .firstWhere((e) => e['filename'] == filename)['barcodes']
          .cast<String>();
    });
  }

void digitarBarcodes() async {
  print("Posicione o cursor no campo de texto. Começando em 5 segundos...");
  await Future.delayed(Duration(seconds: 5)); // delay antes de iniciar

  for (final code in selectedBarcodes) {
    print("Digitando: $code");
    await sendToNativeTyper(code);
    await Future.delayed(Duration(seconds: 1)); 
  }
}


  Future<void> sendToNativeTyper(String barcode) async {
    // Aqui será feito via platform channel: native code em Linux ou Windows
    print('>> Digitando: $barcode');
    // Implementação real será em C++/Rust/Java/C ou via `xdotool`, etc.
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Barcode Typer')),
      body: loading
          ? Center(child: CircularProgressIndicator())
          : Padding(
              padding: EdgeInsets.all(16),
              child: Column(
                children: [
                  DropdownButton<String>(
                    value: selectedFilename,
                    hint: Text("Selecione um arquivo"),
                    isExpanded: true,
                    items: data
                        .map<DropdownMenuItem<String>>((item) => DropdownMenuItem(
                              value: item['filename'],
                              child: Text(item['filename']),
                            ))
                        .toList(),
                    onChanged: (value) {
                      if (value != null) selectFilename(value);
                    },
                  ),
                  SizedBox(height: 16),
                  if (selectedBarcodes.isNotEmpty)
                    Expanded(
                      child: ListView.builder(
                        itemCount: selectedBarcodes.length,
                        itemBuilder: (_, i) => ListTile(
                          title: Text(selectedBarcodes[i]),
                        ),
                      ),
                    ),
                  if (selectedBarcodes.isNotEmpty)
                    ElevatedButton(
                      onPressed: digitarBarcodes,
                      child: Text("Digitar códigos"),
                    ),
                ],
              ),
            ),
    );
  }
}
