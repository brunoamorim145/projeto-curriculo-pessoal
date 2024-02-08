import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-descricao-compartilhado',
  templateUrl: './descricao-compartilhado.component.html',
<<<<<<< HEAD
  styleUrls: ['./descricao-compartilhado.component.css', './descricao-compartilhado-responsive.component.css']
=======
  styleUrls: ['./descricao-compartilhado.component.css']
>>>>>>> 87d4916d8178bb93ab9e66eead166c404804a4fc
})
export class DescricaoCompartilhadoComponent implements OnInit {

  @Input()
  descricaoCompartilhada:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
