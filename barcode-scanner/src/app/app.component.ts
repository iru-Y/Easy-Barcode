import { Component } from '@angular/core';
import { BarcodeScannerComponent } from "./home/components/barcode-scanner/barcode-scanner.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [BarcodeScannerComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'barcode-scanner';
}
