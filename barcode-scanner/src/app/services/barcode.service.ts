import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root',
})
export class BarcodeService {

   constructor(private http: HttpClient) {}

  async sendBarcode(barcode: string) {
  const url = '/add_barcode';

  try {
    await this.http.post(url, { barcode }, { headers: { 'Content-Type': 'application/json' } }).toPromise();
    alert('Enviado com sucesso!');
  } catch (error: any) {
    const msg = error?.error?.message || error.message || 'Erro desconhecido';
    alert(`Erro ao enviar: ${msg}`);
  }
}
}
