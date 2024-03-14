import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario : FormGroup;
  categorias : string[] = [];  
  constructor(private formBuilder : FormBuilder, private categoriaService : CategoriaService) { 
    this.formulario = this.formBuilder.group({
      //Volvemos a las 8:20 - Ojo que el price como es numerico inicia en 0
      title:['Un valor inicial',[Validators.required,Validators.minLength(6)]],
      price: [0],
      description: [''],
      category: [''],
      image: ['']

    })
  }

  ngOnInit(): void {
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
    debugger;
  }

}
