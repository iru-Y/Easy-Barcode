import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { BrowserMultiFormatReader, Result } from '@zxing/library';
import { BarcodeService } from '../../../domain/services/barcode.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AlertService } from '../../../domain/services/alert.services';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css'],
})
export class BarcodeScannerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  countControl = new FormControl('', [Validators.required, Validators.min(1)]);
  desiredCount: number | null = null;
  isSending = false;

  private codeReader = new BrowserMultiFormatReader();

  scannedBarcodes: string[] = [];

  showModal = false;

  scannedFiles: { filename: string }[] = [];

  selectedFilename: string | null = null;
  newFilenameControl = new FormControl('', [Validators.required]);
  private pollingIntervalId: any;

  constructor(
    private barcodeService: BarcodeService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.countControl.valueChanges.subscribe((value) => {
      const num = parseInt(value || '', 10);
      this.desiredCount = isNaN(num) || num < 1 ? null : num;
    });

    this.loadScannedFiles();

    this.pollingIntervalId = setInterval(() => {
      this.loadScannedFiles();
    }, 3000);
  }

 
  async loadScannedFiles() {
    try {
      this.scannedFiles = await this.barcodeService.getUploadedBarcodes();
    } catch {
      this.scannedFiles = [];
    }
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
      .decodeFromVideoDevice(
        null,
        this.videoElement.nativeElement,
        (result, error) => {
          if (result) {
            this.onDetect(result);
          }
        }
      )
      .catch((err) => {
        console.error('Erro ao acessar a câmera:', err);
      });
  }

  onDetect(result: Result): void {
    const raw = result.getText().trim();
    if (!raw) return;

    if (this.scannedBarcodes.includes(raw)) return;
    this.scannedBarcodes.push(raw);
  }

  openModal() {
    if (this.scannedBarcodes.length === 0) {
      this.alertService.show('Nenhum código escaneado para enviar.');
      return;
    }
    this.selectedFilename = null;
    this.newFilenameControl.reset();
    this.showModal = true;
  }

  async confirmSend() {
    let filenameToSend = this.selectedFilename;
    if (!filenameToSend) {
      const input = this.newFilenameControl.value?.trim();
      if (!input) {
        this.alertService.show('Informe um nome válido para o novo arquivo.');
        return;
      }
      filenameToSend = input.replace(/\.csv$/i, '');
    }

    this.isSending = true;

    const quantity = this.desiredCount ?? 1;
    const expandedBarcodes = this.scannedBarcodes.flatMap((code) =>
      Array(quantity).fill(code)
    );

    try {
      await this.barcodeService.sendBarcode(filenameToSend, expandedBarcodes);
      this.alertService.show(`📦 Barcodes enviados para arquivo: ${filenameToSend}`);
      this.scannedBarcodes = [];
      this.countControl.setValue('');
      this.countControl.markAsUntouched();
      await this.loadScannedFiles();
      this.showModal = false;
    } catch (e) {
      this.alertService.show('Erro ao enviar os barcodes.');
    }

    this.isSending = false;
  }
}
