import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { BrowserMultiFormatReader, Result } from '@zxing/library';
import { BarcodeService } from '../../../domain/services/barcode.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AlertService } from '../../../domain/services/alert.services';

import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
  ],
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css'],
})
export class BarcodeScannerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;
  countControl = new FormControl('', [Validators.required, Validators.min(1)]);
  desiredCount: number | null = null;
  isSending = false;

  private codeReader = new BrowserMultiFormatReader();

  scannedBarcodes: string[] = [];

  showModal = false;

  scannedFiles: { filename: string }[] = [];

  selectedFilename: string | null = null;
  newFilenameControl = new FormControl('', [Validators.required]);

  constructor(
    private barcodeService: BarcodeService,
    private alertService: AlertService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.countControl.valueChanges.subscribe((value) => {
      const num = parseInt(value || '', 10);
      this.desiredCount = isNaN(num) || num < 1 ? null : num;
    });

    this.loadScannedFiles();
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
    this.dialogRef = this.dialog.open(this.modalTemplate, {
      width: '400px',
      disableClose: true,
    panelClass: 'custom-dialog-container',
    });
  }

  async confirmSend() {
    if (!this.dialogRef) return;

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
      this.alertService.show(
        `📦 Barcodes enviados para arquivo: ${filenameToSend}`
      );
      this.scannedBarcodes = [];
      this.countControl.setValue('');
      this.countControl.markAsUntouched();
      await this.loadScannedFiles();
      this.dialogRef.close();
    } catch (e) {
      this.alertService.show('Erro ao enviar os barcodes.');
    }

    this.isSending = false;
  }
}
