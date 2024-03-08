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
      link: 'Componentes', //Ejemplo Ruta Relativa (Empiezan sin el slash)
    },
    {
      nombre: 'Binding',
      link: '/clases/Binding', //Ejemplo Ruta absoluta (Empiezan con slash)
    },
    {
      nombre: 'Ciclo de vida',
      link: 'CicloDeVida',
    },
    {
      nombre: 'Directivas',
      link: 'Directivas',
    },
    {
      nombre: 'Calculadora',
      link: 'Calculadora',
    },
    {
      nombre: 'Comunicacion',
      link: 'Comunicacion'
    },
    {
      nombre: 'Routing',
      link: 'Routing'
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
