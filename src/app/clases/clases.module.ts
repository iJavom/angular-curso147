import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { ClasesComponent } from './clases.component';
import { ComponenteComponent } from './componente/componente.component';
import { ComponenteInputComponent } from './comunicacion-componentes/componente-input/componente-input.component';
import { ComponenteOutputComponent } from './comunicacion-componentes/componente-output/componente-output.component';
import { ComunicacionComponentesComponent } from './comunicacion-componentes/comunicacion-componentes.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { MenuClasesComponent } from './menu-clases/menu-clases.component';
import { ModelsComponent } from './models/models.component';
import { RDosComponent } from './routing/r-dos/r-dos.component';
import { RUnoComponent } from './routing/r-uno/r-uno.component';
import { RoutingComponent } from './routing/routing.component';
import { ServicesComponent } from './services/services.component';
import { ClasesRoutingModule } from './clases-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
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
    RUnoComponent,
    RDosComponent,
    ModelsComponent,
    ServicesComponent,

    HttpclientComponent,
    FormulariosComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ClasesModule { }
