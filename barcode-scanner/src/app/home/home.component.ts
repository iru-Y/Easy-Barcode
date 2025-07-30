import { Component } from '@angular/core';
import { BarcodeScannerComponent } from "./components/barcode-scanner/barcode-scanner.component";
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { ScanListComponent } from '../scan-list/scan-list.component';

@Component({
  selector: 'app-home',
  imports: [BarcodeScannerComponent, FooterNavComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
