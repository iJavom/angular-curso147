import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  menu =[
    {
      nombre: 'Inicio',
      link: '/tienda/inicio'
    },
    {
      nombre: 'Productos',
      link : '/tienda/productos'
    },
    {
      nombre: 'Contactanos',
      link: '/tienda/contactanos'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
