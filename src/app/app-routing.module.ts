import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

const routes: Routes = [

  {path:'clases', loadChildren: ()=> import('./clases/clases.module').then((m)=>m.ClasesModule)},
  {path:'tienda',loadChildren: ()=>import('./tienda/tienda.module').then(m=>m.TiendaModule)},
  { path: '', redirectTo: 'tienda', pathMatch: 'full'},

  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
