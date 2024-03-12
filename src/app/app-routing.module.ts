import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { ComponenteComponent } from './clases/componente/componente.component';
import { ClasesComponent } from './clases/clases.component';
import { CalculadoraComponent } from './clases/calculadora/calculadora.component';
import { DirectivasComponent } from './clases/directivas/directivas.component';
import { BindingComponent } from './clases/binding/binding.component';
import { CicloVidaComponent } from './clases/ciclo-vida/ciclo-vida.component';
import { ComunicacionComponentesComponent } from './clases/comunicacion-componentes/comunicacion-componentes.component';
import { RoutingComponent } from './clases/routing/routing.component';
import { RUnoComponent } from './clases/routing/r-uno/r-uno.component';
import { RDosComponent } from './clases/routing/r-dos/r-dos.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { ProductosComponent } from './tienda/productos/productos.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { ContactanosComponent } from './tienda/contactanos/contactanos.component';
import { FormularioComponent } from './tienda/productos/formulario/formulario.component';
import { ListaComponent } from './tienda/productos/lista/lista.component';
//En routes nosotros vamos a guardar en forma de objetos, las posibles rutas con sus respectivos componentes o modulos
const routes: Routes = [

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
        children:[
          //En los paths nosotros podemos agregar parametros de la siguiente forma
          {path:'r-uno/:nombreParametro',component: RUnoComponent},
          {path:'r-uno',component: RUnoComponent},
          {path:'r-dos',component: RDosComponent}
        ]
      },
    ],
  },

  // LO DE ARRIBA ES TEORIA  SE PUEDE OMITIR PARA LA TIENDA
  { path: 'tienda', component: TiendaComponent, children:[
    //Volvemos a las 8:20;

    {
      path:'productos',component: ProductosComponent, children:[
        {
          path:'formulario',component: FormularioComponent,
        },
        {
          path:'lista',component: ListaComponent,
        },
      ]
    },
    {
      path:'inicio', component:InicioComponent
    },
    {
      path: 'contactanos', component: ContactanosComponent
    }
  ]},

  { path: '', redirectTo: 'tienda', pathMatch: 'full'},

  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
