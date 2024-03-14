import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/shared/models/producto.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProductosService } from 'src/app/shared/services/productos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario : FormGroup;
  categorias : string[] = []; 
  id:number | null =0; 
  constructor(
    private formBuilder : FormBuilder, 
    private categoriaService : CategoriaService,
    private productosService : ProductosService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { 
    this.formulario = this.formBuilder.group({
      //Volvemos a las 8:20 - Ojo que el price como es numerico inicia en 0
      title:['',[Validators.required,Validators.minLength(6)]],
      price:[0],
      description: [''],
      category: [''],
      image: ['',Validators.required]

    })
  }

  ngOnInit(): void {
    this.id = +(this.activatedRoute.snapshot.paramMap.get('id') || 0);
    if(this.id){
      this.title?.markAsTouched();
      this.title?.addValidators([Validators.required]);
      this.title?.removeValidators([Validators.required]);
      this.productosService.obtenerProducto(this.id).subscribe({
        next: (data)=>{
          //Forma 1 para llenar campos de manera individual
          // this.formulario.controls['title'].setValue(data.title);
          // this.formulario.controls['price'].setValue(data.price);
          // this.formulario.controls['description'].setValue(data.description);
          // this.formulario.controls['category'].setValue(data.category);
          // this.formulario.controls['image'].setValue(data.image);
          //Forma 2 para llenar campos de manera individual
          // this.formulario.patchValue({title : data.title});
          // this.formulario.patchValue({price : data.price});
          // this.formulario.patchValue({description : data.description});
          // this.formulario.patchValue({category : data.category});
          // this.formulario.patchValue({image : data.image});
          //Forma para llenar todo el formControl, es importante resaltar que la estructura debe ser similar
          this.formulario.patchValue(data);
        },
        error: (error)=>{
          alert("Oh oh hubo un error")
          console.log(error);
        }
      })
    }

    this.categoriaService.obtenerCategorias().subscribe({
      next: (data)=>{
        this.categorias = data;
      },
      error: (error)=>{
        alert("Oh oh hubo un error")
        console.log(error);
      }
    });
  }

  guardar(){
    this.productosService.crearProducto(this.formulario.value).subscribe({
      next: (data)=>{
        alert("Guardado exitoso");
        this.router.navigateByUrl(`/tienda/productos/lista`);
      },
      error: (error)=>{
        alert("Oh oh hubo un error")
        console.log(error);
      }
    });
  }

  actualizar(){
    const productoPut = new Producto();
    productoPut.title = this.title!.value;
    this.productosService.actualizarProducto(this.id!,this.formulario.value).subscribe({
      next: (data)=>{
        alert("Guardado exitoso");
        this.router.navigateByUrl(`/tienda/productos/lista`);
      },
      error: (error)=>{
        alert("Oh oh hubo un error")
        console.log(error);
      }
    });
  }

  get title() {
    return this.formulario.get('title');
  }
  get description(){
    return this.formulario.get('description');
  }
  get category(){
    return this.formulario.get('category');
  }
  get image(){
    return this.formulario.get('image');
  }

}
