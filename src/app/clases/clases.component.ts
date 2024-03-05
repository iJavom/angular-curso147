import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css'],
})
export class ClasesComponent implements OnInit {
  menu = [
    {
      nombre: 'Componentes',
      link: 'componentes',
    },
    {
      nombre: 'Binding',
      link: 'binding',
    },
    {
      nombre: 'Ciclo de vida',
      link: 'ciclo-de-vida',
    },
    {
      nombre: 'Directivas',
      link: 'directivas',
    },
    {
      nombre: 'Calculadora',
      link: 'calculadora',
    },
  ];

  claseSeleccionada = '';

  constructor() {}

  ngOnInit(): void {}

  cambiarValorSelector(e: any) {
    this.claseSeleccionada = e.target.value;
  }
}
