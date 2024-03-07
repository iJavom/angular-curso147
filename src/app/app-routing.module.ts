import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteComponent } from './clases/componente/componente.component';
import { ClasesComponent } from './clases/clases.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CalculadoraComponent } from './clases/calculadora/calculadora.component';
import { DirectivasComponent } from './clases/directivas/directivas.component';
import { BindingComponent } from './clases/binding/binding.component';
import { CicloVidaComponent } from './clases/ciclo-vida/ciclo-vida.component';
import { ComunicacionComponentesComponent } from './clases/comunicacion-componentes/comunicacion-componentes.component';
import { RoutingComponent } from './clases/routing/routing.component';
//En routes nosotros vamos a guardar en forma de objetos, las posibles rutas con sus respectivos componentes o modulos
const routes: Routes = [
  //1.- Rutas especificas: Hay ruta que pueden llevar parametros, estas son las primeras que deberian ser declaradas
  //2.- Rutas Generales: Son rutas que tienen a llevar a componentes
  //3.- Ruta principal: Que son aquellas que tienen path vacio
  //4.- Rutas anidadas: Son aquellas que importan modulos
  //5.- Ruta 404 / Not Found - No encontrada: Que es para redirigir la aplicacion en caso de no conseguir

  /*
    Estructura de un route:{
      path: '', //-> un string que sirve para indicar la ruta
      component: ClassComponent, // -> un componente para renderizar
      redirectTo: '', // -> Sirve para redireccionar una ruta
      children:[], // -> Sirve para incluir mas routes que dependan del route padre (la estructura es la misma a la de los padres)
    }
  */

  {
    path: 'clases',
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
      },
    ],
  },
  { path: 'tienda', component: TiendaComponent },

  { path: '', component: TiendaComponent },

  { path: '**', redirectTo: 'componente' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
