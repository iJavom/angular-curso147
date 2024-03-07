import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacion-componentes',
  templateUrl: './comunicacion-componentes.component.html',
  styleUrls: ['./comunicacion-componentes.component.css']
})
export class ComunicacionComponentesComponent implements OnInit {

  valorPadre = "Vine del padre";
  ejemploOutput = "Mi hijo no me ha avisado nada";
  constructor() { }

  ngOnInit(): void {
  }

  funcionParaProbarOutput(msj:string){
    debugger;
    console.log(msj)
  }

}
