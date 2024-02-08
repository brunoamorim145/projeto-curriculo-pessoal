import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-certificados',
  templateUrl: './card-certificados.component.html',
  styleUrls: ['./card-certificados.component.css', './card-certificados-responsive.component.css']
})
export class CardCertificadosComponent implements OnInit {

  @Input()
  certificadoImagem:string = ""

  @Input()
  certificadoTitulo:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
