import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-portfolio',
  templateUrl: './card-portfolio.component.html',
<<<<<<< HEAD
  styleUrls: ['./card-portfolio.component.css', './card-portfolio.component.css']
=======
  styleUrls: ['./card-portfolio.component.css']
>>>>>>> 87d4916d8178bb93ab9e66eead166c404804a4fc
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
