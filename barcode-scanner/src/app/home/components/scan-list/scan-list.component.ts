import { Component } from '@angular/core';
import { BarcodeService } from '../../../services/barcode.service';

@Component({
  selector: 'app-scan-list',
  imports: [],
  templateUrl: './scan-list.component.html',
  styleUrl: './scan-list.component.css'
})
export class ScanListComponent {
  constructor(private barcodeService: BarcodeService){}


async ngOnInit() {
  const barcodes = await this.barcodeService.getUploadedBarcodes();
  console.log('Arquivos enviados:', barcodes);
}
}
