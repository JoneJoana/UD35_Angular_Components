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

  @Output() showClientListEventEmitter = new EventEmitter<boolean>(false);

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

    if((this.name != ''||this.cif != '')&&this.group != ''){
      //metemos la variable en el array para guardarlo en memoria
      this.clientes.push(cliente);
    }else{
      alert("ERROR. Has de introducir mínimo nombre o cif además del grupo para que se registre al cliente. ")
    }

    //limpiamos inputs
    this.name = '';
    this.cif = '';
    this.addres= '';
    this.group = '';
  }

  showClientList(show: boolean){
    this.showClientListEventEmitter.emit(show);
  }

}

// creamos un dto de cliente para tener la estructura clara
export interface Client {
  name: string,
  cif: string,
  addres: string,
  group: string;
}
