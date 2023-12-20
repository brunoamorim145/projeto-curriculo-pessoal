import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-compartilhado',
  templateUrl: './titulo-compartilhado.component.html',
  styleUrls: ['./titulo-compartilhado.component.css']
})
export class TituloCompartilhadoComponent implements OnInit {

  @Input()
  tituloCompartilhado:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
