import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    RespuestaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormularioComponent,
    RespuestaComponent
  ]
})
export class ElementsModule { }
