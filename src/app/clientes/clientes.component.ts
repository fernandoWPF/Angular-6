import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [];
  cliente = "";

  addCliente(){
    this.clientes.push(this.cliente);
  }

  constructor() { }

  ngOnInit() {
  }

}
