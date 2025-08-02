import 'dart:io';

Future<void> sendToNativeTyper(String barcode) async {
  for (var char in barcode.split('')) {
    await Process.run('xdotool', ['type', '--delay', '50', char]);
  }
  await Process.run('xdotool', ['key', 'Return']);
}
