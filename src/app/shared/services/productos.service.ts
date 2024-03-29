import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  apiUrl = 'https://fakestoreapi.com/'

  constructor(private http: HttpClient) {}
  //C - CREAR
  crearProducto(producto: Producto){
    return this.http.post(`${this.apiUrl}products`,JSON.stringify(producto));
  }
  //R - LEER TODO
  obtenerProductos(tamanio?:number, categoria?:string){
    let query="";
    if(tamanio){
      query= `?limit=${tamanio}`
    }
    let queryCategoria = "";
    if(categoria){
      queryCategoria=`/category/${categoria}`
    }
    return this.http.get(`${this.apiUrl}products${queryCategoria}${query}`); //Como podria agregar &sort=desc ?
  }
  //R - LEER INDIVIDUAL
  obtenerProducto(id:number):Observable<Producto>{
    //Ejemplo para agregar headers (No es indispensable para fakestoreapi)
    const header= new HttpHeaders({
      'Authorization': 'Bearer sjadiohn2i3klhnb4r8ihsxzn'
    })
    return this.http.get<Producto>(`${this.apiUrl}products/${id}`,{
      headers: header,
    });
  }

  //U - ACTUALIZAR
  actualizarProducto(id:number, producto: Producto){
    return this.http.put(`${this.apiUrl}products/${id}`,JSON.stringify(producto));
  }
  //D - BORRAR
  eliminarProducto(id:number){
    return this.http.delete<Producto>(`${this.apiUrl}products/${id}`);
  }

  // obtenerProductosFiltrados(tamanio:number){
  //   return this.http.get(`${this.apiUrl}products?limit=${tamanio}`);
  // }

  // obtenerProductos() : Producto[] {
  //   return [
  //     {
  //       id: 1,
  //       title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //       price: 109.95,
  //       description:
  //         'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //       category: "men's clothing",
  //       image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //       rating: { rate: 3.9, count: 120 },
  //     },
  //     {
  //       id: 2,
  //       title: 'Mens Casual Premium Slim Fit T-Shirts ',
  //       price: 22.3,
  //       description:
  //         'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
  //       category: "men's clothing",
  //       image:
  //         'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  //       rating: { rate: 4.1, count: 259 },
  //     },
  //     .
  //     .
  //     .
  //     //Mas productos pero es una forma incorrecta
  //   ];
  // }
}
