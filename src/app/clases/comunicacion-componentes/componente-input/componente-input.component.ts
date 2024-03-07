import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-input',
  templateUrl: './componente-input.component.html',
  styleUrls: ['./componente-input.component.css']
})
export class ComponenteInputComponent implements OnInit {

  @Input() tituloComponente = "Hola";

  constructor() { }

  ngOnInit(): void {
  }

}
