import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BarcodeService {
  constructor(private http: HttpClient) {}

  async sendBarcode(barcode: string) {

    try {
      await firstValueFrom(
        this.http.post(
          '/add_barcode',
          { barcode },
          { headers: { 'Content-Type': 'application/json' } }
        )
      );
      alert('Enviado com sucesso!');
    } catch (error: any) {
      const msg = error?.error?.message || error.message || 'Erro desconhecido';
      alert(`Erro ao enviar: ${msg}`);
    }
  }

  async getUploadedBarcodes(): Promise<string[]> {
    const url = '/barcodes';
    console.log('Buscando barcodes em:', '/barcodes');
    try {
      const response = await firstValueFrom(this.http.get<string[]>(url));
      console.log('Resposta do servidor:', response);
      return response;
    } catch (error: any) {
      console.error('Erro na requisição:', error);
      const msg =
        error?.error?.message || error.message || 'Erro ao buscar barcodes';
      alert(msg);
      return [];
    }
  }
}
