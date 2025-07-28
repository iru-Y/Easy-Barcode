import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ScannerFileDto } from '../models/scanner-file-dto';

@Injectable({
  providedIn: 'root',
})
export class BarcodeService {
  url: string =  `${process.env.API_URL}/barcode`;

  constructor(private http: HttpClient) {}

  async sendBarcode(
    filename: string,
    barcodes: string[]
  ): Promise<ScannerFileDto> {
    const body = { filename, barcodes };

    return await firstValueFrom(
      this.http.post<ScannerFileDto>(`${this.url}`, body, {
        headers: { 'Content-Type': 'application/json' },
      })
    );
  }

  async getUploadedBarcodes(): Promise<ScannerFileDto[]> {
    return await firstValueFrom(
      this.http.get<ScannerFileDto[]>(`${this.url}`)
    );
  }
}
