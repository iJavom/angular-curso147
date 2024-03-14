import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  apiUrl = 'https://fakestoreapi.com/'

  constructor(private http: HttpClient) {}

  obtenerCategorias(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}products/categories`);
  }

}
