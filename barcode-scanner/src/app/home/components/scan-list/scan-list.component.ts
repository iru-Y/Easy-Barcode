import { Component } from '@angular/core';
import { BarcodeService } from '../../../services/barcode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scan-list',
  imports: [CommonModule],
  templateUrl: './scan-list.component.html',
  styleUrl: './scan-list.component.css'
})
export class ScanListComponent {

    barcodes: string[] = [];

  constructor(private barcodeService: BarcodeService){}


async ngOnInit() {
  this.barcodes = await this.barcodeService.getUploadedBarcodes();
  console.log('Arquivos enviados:', this.barcodes);
}
}
