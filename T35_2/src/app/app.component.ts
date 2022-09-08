import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormularioComponent } from './elements/formulario/formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'T35_2';

  @ViewChild(FormularioComponent) formulario: any;

  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  ngAfterViewInit(): void {
    this.nombre = this.formulario.nombre;
    this.email = this.formulario.email;
    this.mensaje = this.formulario.mensaje;
  }

  showRespuesta: boolean = false;

  showRespuestaComp(show: boolean) {
    this.showRespuesta = show;
    this.nombre = this.formulario.nombre;
    this.email = this.formulario.email;
    this.mensaje = this.formulario.mensaje;
  }
}
