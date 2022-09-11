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
  validacion: number = 0;
  ok: boolean = false;

  @Output() showMessageReceivedEvenEmitter = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  processForm(show: boolean){
    if(this.nombre != '' && this.mensaje != '' && this.validacion == 5){
      this.showMessageReceivedEvenEmitter.emit(show);
      this.nombre = '';
      this.email = '';
      this.mensaje = '';
      this.validacion = 0;
    }else{
      alert('Datos incorrectos!')
    }

  }

}
