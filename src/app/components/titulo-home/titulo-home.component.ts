import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-home',
  templateUrl: './titulo-home.component.html',
  styleUrls: ['./titulo-home.component.css', './titulo-home-responsive.component.css']
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
