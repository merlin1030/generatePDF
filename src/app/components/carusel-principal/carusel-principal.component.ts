import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carusel-principal',
  templateUrl: './carusel-principal.component.html',
  styleUrls: ['./carusel-principal.component.scss']
})
export class CaruselPrincipalComponent implements OnInit {

  customOptions: OwlOptions = {
    autoHeight: true,
    autoWidth: true,
    stagePadding: 0,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
