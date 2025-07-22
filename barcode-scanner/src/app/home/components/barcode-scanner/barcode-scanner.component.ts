import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserMultiFormatReader, Result } from '@zxing/library';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BarcodeService } from '../../../services/barcode.service';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, NgOptimizedImage],
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  countControl = new FormControl('', [Validators.required, Validators.min(1)]);
  desiredCount: number | null = null;
  lastScannedCode: string | null = null;
  isSending = false;

  private codeReader = new BrowserMultiFormatReader();

  constructor(private barcodeService: BarcodeService) {}

  ngOnInit(): void {
    this.countControl.valueChanges.subscribe(value => {
      const num = parseInt(value || '', 10);
      this.desiredCount = isNaN(num) || num < 1 ? null : num;
    });
  }

  ngAfterViewInit(): void {
    this.startScanner();
  }

  startScanner(): void {
    

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.warn('Seu navegador não suporta acesso à câmera.');
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
      });
  }

  async onDetect(result: Result): Promise<void> {
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
