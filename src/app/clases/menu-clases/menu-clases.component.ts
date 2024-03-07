import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-clases',
  templateUrl: './menu-clases.component.html',
  styleUrls: ['./menu-clases.component.css']
})
export class MenuClasesComponent implements OnInit {
  //Ejemplo de comunicacion entre componentes...
  @Output() cambiarPagina = new EventEmitter<string>();
  menu = [
    {
      nombre: 'Componentes',
      link: 'clases/Componentes',
    },
    {
      nombre: 'Binding',
      link: 'clases/Binding',
    },
    {
      nombre: 'Ciclo de vida',
      link: 'clases/CicloDeVida',
    },
    {
      nombre: 'Directivas',
      link: 'clases/Directivas',
    },
    {
      nombre: 'Calculadora',
      link: 'clases/Calculadora',
    },
    {
      nombre: 'Comunicacion',
      link: 'clases/comunicacion-component'
    }
  ];

  claseSeleccionada = '';

  constructor() { }

  ngOnInit(): void {
  }

  llamarCambio(pLink:string){
    this.cambiarPagina.emit(pLink);
  }

}
