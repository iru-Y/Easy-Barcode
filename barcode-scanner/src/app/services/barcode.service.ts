import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BarcodeService {

  constructor(private http: HttpClient) {}

  async sendBarcode(barcode: string) {
    const url = '/add_barcode';

    try {
      await firstValueFrom(
        this.http.post(url, { barcode }, { headers: { 'Content-Type': 'application/json' } })
      );
      alert('Enviado com sucesso!');
    } catch (error: any) {
      const msg = error?.error?.message || error.message || 'Erro desconhecido';
      alert(`Erro ao enviar: ${msg}`);
    }
  }

  async getUploadedBarcodes(): Promise<string[]> {
    const url = '/barcodes';
    try {
      const response = await firstValueFrom(this.http.get<string[]>(url));
      return response;
    } catch (error: any) {
      const msg = error?.error?.message || error.message || 'Erro ao buscar barcodes';
      alert(msg);
      return [];
    }
  }
}
