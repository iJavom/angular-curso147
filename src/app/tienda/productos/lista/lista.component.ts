import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.model';
import { ProductosService } from 'src/app/shared/services/productos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  productos: any = [];

  constructor( private productosService : ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe({
      next: (respuesta)=>{
        this.productos = respuesta;
      },
      error: (error)=>{
        alert("Oh oh hubo un error")
        console.log(error);
      },
      complete: ()=>{
        
      }
    });
  }
}
