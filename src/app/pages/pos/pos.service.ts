import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PosService {
  url: string = environment.api_url;

  constructor(private http: HttpClient) {}

  findProductByBarcode(barcode: string) {
    return this.http.get<any>(`${this.url}/api/product/read/${barcode}`);
  }
}
