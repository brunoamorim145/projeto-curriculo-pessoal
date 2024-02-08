import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
<<<<<<< HEAD
  styleUrls: ['./card-home.component.css', './card-home-responsive.component.css']
=======
  styleUrls: ['./card-home.component.css']
>>>>>>> 87d4916d8178bb93ab9e66eead166c404804a4fc
})
export class CardHomeComponent implements OnInit {

  @Input()
  imagemHome:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
