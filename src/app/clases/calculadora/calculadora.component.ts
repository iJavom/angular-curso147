import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  pantalla = 0;
  memoria = 0;
  operacion = '';
  constructor() { }

  ngOnInit(): void {
  }

  apretarTecla(boton:string){
    switch(boton){
      case '/':
      case '*':
      case '-':
      case '+':
        this.memoria = this.pantalla;
        this.operacion = boton;
        this.pantalla = 0;
      break;
      case '=':
        this.pantalla = eval(this.memoria.toString()+this.operacion+this.pantalla) //Funcion que permite ejecutar JS/TS
        //Nos vemos a las 8:21
        // switch(this.operacion){
        //     case '/':
        //       this.pantalla = this.memoria / this.pantalla;
        //     break;
        //     case '*':
        //       this.pantalla = this.memoria * this.pantalla;
        //       break;
        //     case '-':
        //       this.pantalla = this.memoria - this.pantalla;
        //       break;
        //     case '+':
        //       this.pantalla = this.memoria + this.pantalla;
        //       break;
        // }
      break;
      default:
        this.pantalla = +(this.pantalla.toString() + boton);
      break;
    }
    
  }

}
