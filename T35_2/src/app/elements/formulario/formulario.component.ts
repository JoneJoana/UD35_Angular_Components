import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  validacion: string = '';

  @Output() showMessageReceivedEvenEmitter = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  processForm(show: boolean){
    this.showMessageReceivedEvenEmitter.emit(show);
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    this.validacion = '';
  }

}
