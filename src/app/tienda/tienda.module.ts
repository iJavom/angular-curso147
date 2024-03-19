import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './productos/formulario/formulario.component';
import { ListaComponent } from './productos/lista/lista.component';
import { ProductosComponent } from './productos/productos.component';
import { TiendaComponent } from './tienda.component';
import { TiendaRoutingModule } from './tienda-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TiendaComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    ContactanosComponent,
    ListaComponent,
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TiendaModule { }
