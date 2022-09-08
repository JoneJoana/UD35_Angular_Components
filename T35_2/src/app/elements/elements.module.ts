import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { RespuestaComponent } from './respuesta/respuesta.component';



@NgModule({
  declarations: [
    FormularioComponent,
    RespuestaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormularioComponent,
    RespuestaComponent
  ]
})
export class ElementsModule { }
