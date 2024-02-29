import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public soyUnaVariableEnElTS = "Soy un ejemplo que viene desde el ts";

  public botonVariable = false;
  oculto = true;


  urlImg = "https://tucachorrotienda.com/wp-content/uploads/2018/12/husky-202-min.png";

  variableNgModel = "";

  constructor() { }

  ngOnInit(): void {

  }

  retornarString(){
    return "Retorne desde un metodo";
  }

  cambiarMensaje(){
    this.soyUnaVariableEnElTS = "Me han cambiado porque clickaron el boton verde"
  }

  cambiarMensajeDesdeInput(e:any){
    this.soyUnaVariableEnElTS = e.target.value;
  }

}
