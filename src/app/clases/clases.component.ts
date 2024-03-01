import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  claseSeleccionada="";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValorSelector(e:any){
    this.claseSeleccionada = e.target.value;
  }

}
