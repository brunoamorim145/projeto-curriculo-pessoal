import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-compartilhado',
  templateUrl: './titulo-compartilhado.component.html',
<<<<<<< HEAD
  styleUrls: ['./titulo-compartilhado.component.css', './titulo-compartilhado-responsive.component.css']
=======
  styleUrls: ['./titulo-compartilhado.component.css']
>>>>>>> 87d4916d8178bb93ab9e66eead166c404804a4fc
})
export class TituloCompartilhadoComponent implements OnInit {

  @Input()
  tituloCompartilhado:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
