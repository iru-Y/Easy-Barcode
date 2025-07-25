import { Component, OnInit } from '@angular/core';
import { BarcodeService } from '../../../domain/services/barcode.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ScannerFileDto } from '../../../domain/models/scanner-file-dto';

@Component({
  selector: 'app-scan-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './scan-list.component.html',
  styleUrls: ['./scan-list.component.css'],
})
export class ScanListComponent implements OnInit {
  barcodes: ScannerFileDto[] = [];
  selectedDate: Date | null = null;
  code: string[] = [];
  modalOpen = false;

  constructor(private barcodeService: BarcodeService) {}

  async ngOnInit() {
    this.barcodes = await this.barcodeService.getUploadedBarcodes();
    console.log('Arquivos enviados:', this.barcodes);
  }

  openModal(item: ScannerFileDto) {
    this.code = item.barcodes ?? [];
    this.selectedDate = new Date(item.createdAt); 
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.code = [];
  }
  copyToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copiado:', text);
    }).catch(err => {
      console.error('Erro ao copiar:', err);
    });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; // evita scroll
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      console.log('Copiado com fallback:', text);
    } catch (err) {
      console.error('Erro no fallback:', err);
    }
    document.body.removeChild(textarea);
  }
}

}
