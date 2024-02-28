import { Component, OnInit } from '@angular/core';

@Component({ //Etiqueta para indicar que es un component
  selector: 'app-componente', //La forma de llamar nuestro componente
  templateUrl: './componente.component.html', //La referencia hacia un archivo html
  //(>14) standAlone: true/false, // EN angular superiores a 14 sirve para indicar que es un componente independiente y no necesita de los modulos
  //(>14)imports: [] Que sirven para importar componentes, servicios, entre otras cosas 
  //template:'<!--Inserte un codigo html aca-->',//La forma directa de poner un codigo html
  styleUrls: ['./componente.component.css'] //Son las referencias a los archivos css para nuestro componente
})
export class ComponenteComponent implements OnInit {
  //Generalmente antes del constructor nosotros podemos hacer nuestras declaraciones de atributos / variables que vamos a utilizar para nuestro component
  mensaje : string = "Hola mundo!";


  constructor() { //Que sirve para hacer declaraciones de las librerias,servicios, entre otras cosas que vamos a usar en nuestro componente, adicional podemos hacer algunos codigos sincronicos para valores iniciales 

  }
  
  ngOnInit(): void { //Un metodo del ciclo de vida de nuestro componente angular y generalmente se usa para inicializar/definir nuestros datos del componente y ejecutar codigo asincronico 
    // this.saludar();
  }

  //Aqui se implementa la serie de metodos que serviran para modificar nuestros datos, mover nuestras vistas o hacer cualquier ejecucion de codigo

  saludar(){
    alert(this.mensaje);
  }

}
