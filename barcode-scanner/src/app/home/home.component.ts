import { Component } from '@angular/core';
import { BarcodeScannerComponent } from "./components/barcode-scanner/barcode-scanner.component";
import { HeaderComponent } from "../header/header.component";
import { ScanListComponent } from "./components/scan-list/scan-list.component";

@Component({
  selector: 'app-home',
  imports: [BarcodeScannerComponent, HeaderComponent, ScanListComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
