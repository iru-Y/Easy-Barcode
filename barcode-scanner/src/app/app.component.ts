import { Component } from '@angular/core';
import { BarcodeScannerComponent } from "./components/barcode-scanner/barcode-scanner.component";

@Component({
  selector: 'app-root',
  imports: [BarcodeScannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'barcode-scanner';
}
