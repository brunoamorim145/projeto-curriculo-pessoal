import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-certificados',
  templateUrl: './card-certificados.component.html',
<<<<<<< HEAD
  styleUrls: ['./card-certificados.component.css', './card-certificados-responsive.component.css']
=======
  styleUrls: ['./card-certificados.component.css']
>>>>>>> 87d4916d8178bb93ab9e66eead166c404804a4fc
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
