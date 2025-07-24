import { Component, OnInit } from '@angular/core';
import { BarcodeService } from '../../../domain/services/barcode.service';
import { CommonModule } from '@angular/common';
import { ScannerFileDto } from '../../../domain/models/scanner-file-dto';

@Component({
  selector: 'app-scan-list',
  standalone: true,             
  imports: [CommonModule],
  templateUrl: './scan-list.component.html',
  styleUrls: ['./scan-list.component.css']  
})
export class ScanListComponent implements OnInit {

  barcodes: ScannerFileDto[] = [];

  constructor(private barcodeService: BarcodeService){}

  async ngOnInit() {
    this.barcodes = await this.barcodeService.getUploadedBarcodes();
    console.log('Arquivos enviados:', this.barcodes);
  }

}
