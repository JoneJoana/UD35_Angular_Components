import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent{

  @Input() nombre: string = '';
  @Input() email: string = '';
  @Input() mensaje: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
