import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/products/model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = 'http://127.0.0.1:8000/product/';

  constructor(private httpClient: HttpClient) {}

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

  list(): Observable<{ result: Product[] }> {
    return this.httpClient.get<{ result: Product[] }>(this.baseUrl);
  }
}
