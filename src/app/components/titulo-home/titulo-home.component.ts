import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-home',
  templateUrl: './titulo-home.component.html',
<<<<<<< HEAD
  styleUrls: ['./titulo-home.component.css', './titulo-home-responsive.component.css']
=======
  styleUrls: ['./titulo-home.component.css']
>>>>>>> 87d4916d8178bb93ab9e66eead166c404804a4fc
})
export class TituloHomeComponent implements OnInit {

  @Input()
  descricaoHome:string = ""

  @Input()
  tituloHome:string = ""

  @Input()
  linkedinHome:string = ""

  @Input()
  instagramHome:string = ""

  @Input()
  gitHubHome:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
