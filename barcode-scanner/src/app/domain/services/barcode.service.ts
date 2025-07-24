import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ScannerFileDto } from '../models/scanner-file-dto';

@Injectable({
  providedIn: 'root',
})
export class BarcodeService {
  url: string = 'barcode';

  constructor(private http: HttpClient) {}

  async sendBarcode(
    filename: string,
    barcodes: string[]
  ): Promise<ScannerFileDto | null> {
    const body = { filename, barcodes };

    try {
      const response = await firstValueFrom(
        this.http.post<ScannerFileDto>(`${this.url}`, body, {
          headers: { 'Content-Type': 'application/json' },
        })
      );
      alert('📦 Barcodes enviados com sucesso!');
      return response;
    } catch (error: any) {
      const msg = error?.error?.message || error.message || 'Erro desconhecido';
      alert(`❌ Erro ao enviar: ${msg}`);
      return null;
    }
  }

  async getUploadedBarcodes(): Promise<ScannerFileDto[]> {
    try {
      const response = await firstValueFrom(
        this.http.get<ScannerFileDto[]>(`${this.url}`)
      );
      return response;
    } catch (error: any) {
      const msg =
        error?.error?.message || error.message || 'Erro ao buscar arquivos';
      alert(`❌ ${msg}`);
      return [];
    }
  }
}
