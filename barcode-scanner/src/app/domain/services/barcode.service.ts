import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { ScannerFileDto } from '../models/scanner-file-dto';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BarcodeService {
  private url = `${environment.apiUrl}/barcode`;

  private barcodesSubject = new BehaviorSubject<ScannerFileDto[]>([]);
  barcodes$ = this.barcodesSubject.asObservable();

  constructor(private http: HttpClient) {}

  async sendBarcode(
    filename: string,
    barcodes: string[]
  ): Promise<ScannerFileDto> {
    const body = { filename, barcodes };
    const result = await firstValueFrom(
      this.http.post<ScannerFileDto>(`${this.url}`, body, {
        headers: { 'Content-Type': 'application/json' },
      })
    );

    const current = this.barcodesSubject.value;
    this.barcodesSubject.next([...current, result]);

    return result;
  }

  async getUploadedBarcodes(): Promise<ScannerFileDto[]> {
    const result = await firstValueFrom(
      this.http.get<ScannerFileDto[]>(`${this.url}`)
    );

    this.barcodesSubject.next(result);
    return result;
  }

  getBarcodes(): Observable<ScannerFileDto[]> {
    return this.barcodes$;
  }

  setBarcodes(barcodes: ScannerFileDto[]) {
    this.barcodesSubject.next(barcodes);
  }

  async deleteBarcodeByFilename(filename: string): Promise<void> {
  await firstValueFrom(this.http.delete(`${this.url}/${filename}`));

  const updated = this.barcodesSubject.value.filter(b => b.filename !== filename);
  this.barcodesSubject.next(updated);
}

}
