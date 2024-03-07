import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-output',
  templateUrl: './componente-output.component.html',
  styleUrls: ['./componente-output.component.css']
})
export class ComponenteOutputComponent implements OnInit {
  
  @Output() unEventoParaPadre = new EventEmitter<string>(); // lo que esta entre <> es para definir el tipo de respuesta
  
  constructor() { }

  ngOnInit(): void {
  }

  emitirEvento(){
    this.unEventoParaPadre.emit('Mensaje que viene del hijo en un string');
  }
}
