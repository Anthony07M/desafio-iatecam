import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/components/categories/model/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private baseUrl: string = 'http://127.0.0.1:8000/category/';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<{ result: Category[] }> {
    return this.httpClient.get<{ result: Category[] }>(this.baseUrl);
  }

  create(category: Category): Observable<{ result: Category }> {
    return this.httpClient.post<{ result: Category }>(this.baseUrl, category);
  }
}
