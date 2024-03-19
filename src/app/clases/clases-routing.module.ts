import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BindingComponent } from "./binding/binding.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { CicloVidaComponent } from "./ciclo-vida/ciclo-vida.component";
import { ClasesComponent } from "./clases.component";
import { ComponenteComponent } from "./componente/componente.component";
import { ComunicacionComponentesComponent } from "./comunicacion-componentes/comunicacion-componentes.component";
import { DirectivasComponent } from "./directivas/directivas.component";
import { RDosComponent } from "./routing/r-dos/r-dos.component";
import { RUnoComponent } from "./routing/r-uno/r-uno.component";
import { RoutingComponent } from "./routing/routing.component";
//En routes nosotros vamos a guardar en forma de objetos, las posibles rutas con sus respectivos componentes o modulos
const routes : Routes = [
  //DESDE ACA PODEMOS OMITIR
  //1.- Rutas especificas: Hay ruta que pueden llevar parametros, estas son las primeras que deberian ser declaradas
  //2.- Rutas Generales: Son rutas que tienden a llevar a componentes
  //3.- Ruta principal: Que son aquellas que tienen path vacio
  //4.- Rutas anidadas: Son aquellas que importan modulos
  //5.- Ruta 404 / Not Found - No encontrada: Que es para redirigir la aplicacion en caso de no conseguir

  /*
    Estructura de un route:{
      path: '', //-> un string que sirve para indicar la ruta y adicional pasarle parametros con el prefijo ":"
      component: ClassComponent, // -> un componente para renderizar
      redirectTo: '', // -> Sirve para redireccionar una ruta
      children:[], // -> Sirve para incluir mas routes que dependan del route padre (la estructura es la misma a la de los padres)
    }
  */

    {
        path: '',
        component: ClasesComponent,
        children: [
          { path: 'Componentes', component: ComponenteComponent },
          { path: 'Binding', component: BindingComponent },
          { path: 'CicloDeVida', component: CicloVidaComponent },
          { path: 'Directivas', component: DirectivasComponent },
          { path: 'Calculadora', component: CalculadoraComponent },
          { path: 'Comunicacion', component: ComunicacionComponentesComponent },
          {
            path: 'Routing',
            component: RoutingComponent,
            children:[
              //En los paths nosotros podemos agregar parametros de la siguiente forma
              {path:'r-uno/:nombreParametro',component: RUnoComponent},
              {path:'r-uno',component: RUnoComponent},
              {path:'r-dos',component: RDosComponent}
            ]
          },
        ],
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClasesRoutingModule{}