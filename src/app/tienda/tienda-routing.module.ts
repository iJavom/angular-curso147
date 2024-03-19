import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TiendaComponent } from "./tienda.component";
import { ContactanosComponent } from "./contactanos/contactanos.component";
import { InicioComponent } from "./inicio/inicio.component";
import { FormularioComponent } from "./productos/formulario/formulario.component";
import { ListaComponent } from "./productos/lista/lista.component";
import { ProductosComponent } from "./productos/productos.component";


const routes : Routes = [

  { path: '', component: TiendaComponent, children:[
    {
      path:'productos',component: ProductosComponent, children:[
        {
          path:'formulario/:id',component: FormularioComponent,
        },
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
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TiendaRoutingModule{}