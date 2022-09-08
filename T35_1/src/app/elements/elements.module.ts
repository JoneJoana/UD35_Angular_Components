import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElementsModule { }
