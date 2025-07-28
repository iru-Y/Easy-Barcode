import { Component } from '@angular/core';
import { BarcodeScannerComponent } from "./components/barcode-scanner/barcode-scanner.component";
import { ScanListComponent } from "./components/scan-list/scan-list.component";
import { FooterNavComponent } from "../footer-nav/footer-nav.component";

@Component({
  selector: 'app-home',
  imports: [BarcodeScannerComponent, ScanListComponent, FooterNavComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
