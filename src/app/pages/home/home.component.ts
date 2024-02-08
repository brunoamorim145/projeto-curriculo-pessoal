import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
<<<<<<< HEAD
  styleUrls: ['./home.component.css', './home-responsive.component.css']
=======
  styleUrls: ['./home.component.css']
>>>>>>> 87d4916d8178bb93ab9e66eead166c404804a4fc
})
export class HomeComponent implements OnInit {

  constructor(private elemento:ElementRef) { }

  ngOnInit(): void {

  }

  //mudando a cor de fundo da pagina inicial (metade petro e metade branco)
  ngAfterViewInit(): void {
    this.elemento.nativeElement.ownerDocument.body.style.backgroundImage = 'linear-gradient(161.2deg, rgb(31, 37, 46) 50%, rgb(255, 255, 255) 50%)';
}
}
