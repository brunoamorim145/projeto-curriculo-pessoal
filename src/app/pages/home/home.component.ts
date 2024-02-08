import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
