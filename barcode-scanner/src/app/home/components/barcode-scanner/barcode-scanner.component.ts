import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserMultiFormatReader, Result } from '@zxing/library';
import { CommonModule } from '@angular/common';
import { BarcodeService } from '../../../services/barcode.service';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  countControl = new FormControl('', [Validators.required, Validators.min(1)]);
  desiredCount: number | null = null;
  lastScannedCode: string | null = null;
  isSending = false;

  private codeReader = new BrowserMultiFormatReader();

  constructor(private barcodeService: BarcodeService) {}

  ngOnInit() {
    this.countControl.valueChanges.subscribe(value => {
      const num = parseInt(value || '', 10);
      this.desiredCount = isNaN(num) || num < 1 ? null : num;
    });
  }

startScanner() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Seu navegador não suporta acesso à câmera. Use HTTPS ou localhost.');
    return;
  }

  this.codeReader
    .decodeFromVideoDevice(null, this.videoElement.nativeElement, (result, error) => {
      if (result) {
        this.onDetect(result);
      }

    })
    .catch(err => {
      console.error('Erro ao acessar a câmera:', err);
      alert(`Erro ao acessar a câmera: ${err.message}`);
    });
}

 async onDetect(result: Result) {
  const raw = result.getText();

  if (raw === this.lastScannedCode) return;

  this.lastScannedCode = raw;
  this.isSending = true;

  const count = this.desiredCount ?? 1;

  for (let i = 0; i < count; i++) {
    await this.barcodeService.sendBarcode(raw);
  }

  this.isSending = false;

  if (this.desiredCount !== null) {
    this.countControl.setValue('');
    this.countControl.markAsUntouched();
  }

  setTimeout(() => {
    this.lastScannedCode = null;
  }, 1000);
}

}