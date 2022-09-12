import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AltaClienteComponent,
    ListadoComponent
  ]
})
export class ElementsModule { }
