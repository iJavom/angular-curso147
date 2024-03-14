import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  variableFormularioGrupal:FormGroup; // Aqui creamos el controlador del formulario grupal

  constructor(private formBuilder : FormBuilder) { //Se inicializa en el constructor porque necesitamos del formBuilder para crear el formGroup
    this.variableFormularioGrupal = this.formBuilder.group({ //Creamos nuestra formgrupal asi con el group y le pasamos un objeto con los inputs
      inputAtributo: ['',[Validators.required]], //Cada propiedad llamada formControl recibira un array donde la primera posicion corresponde al valor inicial y la segunda posicion puede ser un validador o mas validadores en forma de array
      otroValor: [''] //No son obligatorios los validadores
    })

   }

  ngOnInit(): void {
          //Forma 1 para asignar valores a los campos de manera individual
          // this.variableFormularioGrupal.controls['inputAtributo'].setValue(variableConValor);

          //Forma 2 para asignar valores a los campos de manera individual
          // this.variableFormularioGrupal.patchValue({inputAtributo : variableConValor});
          //Forma para llenar todo el formControl, es importante resaltar que la estructura debe ser similar
          //this.variableFormularioGrupal.patchValue(objetoConValor);

          //Recordar que el formGroup es el conjunto de los formControls y gracias a ellos podemos incluso invocar metodos 
  }

  get inputAtributo() { //forma para poder acceder a nuestros formControl sin tener que usar parentesis al ser llamados
    return this.variableFormularioGrupal.get('inputAtributo');
  }

}
