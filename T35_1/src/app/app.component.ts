import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AltaClienteComponent, Client } from './elements/alta-cliente/alta-cliente.component';
import { ListadoComponent } from './elements/listado/listado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  title = 'T35_1';

  @ViewChild(AltaClienteComponent) altaClientes: any;

  clients: Client[] = [];

  ngAfterViewInit(): void {
    this.clients = this.altaClientes.clientes
  }

  showList: boolean = false;

  setShowList(value: boolean): void{
    this.showList = value;
  }

}
