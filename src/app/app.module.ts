import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './clases/componente/componente.component';
import { BindingComponent } from './clases/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { CicloVidaComponent } from './clases/ciclo-vida/ciclo-vida.component';
import { ClasesComponent } from './clases/clases.component';
import { DirectivasComponent } from './clases/directivas/directivas.component';
import { CalculadoraComponent } from './clases/calculadora/calculadora.component';
import { ComunicacionComponentesComponent } from './clases/comunicacion-componentes/comunicacion-componentes.component';
import { ComponenteInputComponent } from './clases/comunicacion-componentes/componente-input/componente-input.component';
import { ComponenteOutputComponent } from './clases/comunicacion-componentes/componente-output/componente-output.component';
import { MenuClasesComponent } from './clases/menu-clases/menu-clases.component';
import { RoutingComponent } from './clases/routing/routing.component';
import { TiendaComponent } from './tienda/tienda.component';
import { RUnoComponent } from './clases/routing/r-uno/r-uno.component';
import { RDosComponent } from './clases/routing/r-dos/r-dos.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { NavbarComponent } from './tienda/navbar/navbar.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { ProductosComponent } from './tienda/productos/productos.component';
import { ContactanosComponent } from './tienda/contactanos/contactanos.component';
import { ModelsComponent } from './clases/models/models.component';
import { ServicesComponent } from './clases/services/services.component';
import { ProductosService } from './shared/services/productos.service';
import { FormularioComponent } from './tienda/productos/formulario/formulario.component';
import { ListaComponent } from './tienda/productos/lista/lista.component';
import { HttpclientComponent } from './clases/httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    BindingComponent,
    CicloVidaComponent,
    ClasesComponent,
    DirectivasComponent,
    CalculadoraComponent,
    ComunicacionComponentesComponent,
    ComponenteInputComponent,
    ComponenteOutputComponent,
    MenuClasesComponent,
    RoutingComponent,
    TiendaComponent,
    RUnoComponent,
    RDosComponent,
    NoEncontradoComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    ContactanosComponent,
    ModelsComponent,
    ServicesComponent,
    FormularioComponent,
    ListaComponent,
    HttpclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
