import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-portfolio',
  templateUrl: './card-portfolio.component.html',
  styleUrls: ['./card-portfolio.component.css']
})
export class CardPortfolioComponent implements OnInit {

  @Input()
  imgPortfolio1:string = ""

  @Input()
  imgPortfolio2:string = ""

  @Input()
  imgPortfolio3:string = ""

  @Input()
  tituloPortfolio:string = ""

  @Input()
  descricaoPortfolio:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
