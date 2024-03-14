import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProductosService } from 'src/app/shared/services/productos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  productos: any = [];
  filtroCantidad = 0;
  categorias : string[] = [];
  filtroCategoria = "";

  constructor( private productosService : ProductosService, private categoriaService : CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.obtenerCategorias().subscribe({
      next: (data)=>{
        this.categorias = data;
      },
      error: (error)=>{
        alert("Oh oh hubo un error")
        console.log(error);
      }
    })

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
    //Antigua forma si descomentan se daran cuenta de que el visual studio nos advierte que esta "deprecated"
    // this.productosService.obtenerProductos().subscribe(
    //   (respuesta)=>{

    // },
    // (error)=>{

    // },
    // ()=>{

    // });

  }

  filtrar(){
    //funcionActivarCargador();
    this.productosService.obtenerProductos(this.filtroCantidad,this.filtroCategoria).subscribe({
      next: (respuesta)=>{
        this.productos = respuesta;
      },
      error: (error)=>{
        alert("Oh oh, algo paso!");
        console.log(error);
      },
      complete: ()=>{
        //funcionDesactivarCargador();
      }
    })
  }
}
