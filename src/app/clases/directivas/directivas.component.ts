import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  variableBooleana= true;
  numeros = ['01','02','03','04','05'];

  status="Listo";

  constructor() { }

  ngOnInit(): void {
  }

}
