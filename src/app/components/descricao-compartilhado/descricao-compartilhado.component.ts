import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-descricao-compartilhado',
  templateUrl: './descricao-compartilhado.component.html',
  styleUrls: ['./descricao-compartilhado.component.css', './descricao-compartilhado-responsive.component.css']
})
export class DescricaoCompartilhadoComponent implements OnInit {

  @Input()
  descricaoCompartilhada:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
