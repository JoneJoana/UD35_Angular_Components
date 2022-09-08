import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  name: string = '';
  cif: string = '';
  addres: string = '';
  group: string = '';

  //creamos array de tipo Client para guardar los clientes
  clientes: Client[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    //recogemos los datos introducidos en variable
    const cliente: Client = {
      name: this.name,
      cif: this.cif,
      addres: this.addres,
      group: this.group
    }

    //metemos la variable en el array para guardarlo en memoria
    this.clientes.push(cliente);
    //limpiamos inputs
    this.name = '';
    this.cif = '';
    this.addres= '';
    this.group = '';
  }

  verList(){

  }

}

// creamos un dto de cliente para tener la estructura clara
export interface Client {
  name: string,
  cif: string,
  addres: string,
  group: string;
}
