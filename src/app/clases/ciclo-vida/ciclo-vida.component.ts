import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit {


  constructor() { //*****
    //El constructor es ideal para hacer inyecciones de dependencias e inicializar datos de manera sincrona
    console.log('1-Constructor');
  }


  ngOnChanges(cambios: SimpleChange){
    //Es un evento que se va a ejecutar cada vez que se cambie un valor en algun @input
    console.log('2-ngOnChanges'+cambios);
  }


  

  ngOnInit(): void { //****
    //Se ejecuta una vez se hayan inicializado las propiedades enlazadas del componente. Se utiliza para cargar datos que ya vienen de manera asincrona
    console.log('3-ngOnInit');
  }

  ngDoCheck(){ //**
    //Se ejecuta cada vez que angular realiza una deteccion de cambios. 
    console.log('4-ngDoCheck');
  }

  ngAfterContentInit(){
    //Se ejecuta una vez se proyecte el contenido de etiquetas ng-content y se relaciona con las inicializaciones de los componentes hijos
    console.log('5-ngAfterContentInit');
  }

  ngAfterContentChecked(){
    //Se ejecuta despues de cada deteccion de cambios en el contenido
    console.log('6-ngAfterContentChecked');
  }

  ngAfterViewInit(){
    //Se ejecuta despues se haya inicializado y verificado las vistas incluidas las hijas
    console.log('7-ngAfterViewInit');
  }

  ngAfterViewChecked(){
    //Se ejecuta despues de cada deteccion de cambios en la vistas incluidas las hijas
    console.log('8-ngAfterViewChecked');
  }

  ngOnDestroy(){ //***
    //Se ejecuta antes de destruir el componente. Generalmente se usa para liberar recursos.
    console.log('9-ngOnDestroy');
  }

}
