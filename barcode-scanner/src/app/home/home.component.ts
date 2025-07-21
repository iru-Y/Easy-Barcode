import { Component } from '@angular/core';
import { BarcodeScannerComponent } from "./components/barcode-scanner/barcode-scanner.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  imports: [BarcodeScannerComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
