import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated //! es importante que entiendas esto si vas a usar ::ng-deep / >> / deep; No tengo manera de explicarlo en pocas palabras pero esta guia deberia bastar https://angular.io/guide/view-encapsulation. Si no lo entiendes consultame porque te puedes cargar los estilos de los demas caruseles si no encapsulas los estilos de tipo deep
})
export class AppComponent {
  customOptions: OwlOptions = {
    autoHeight: false,
    autoWidth: false,
    stagePadding: 50,
    loop: false,
    margin: 50,
    nav: true, //? es importante aclarar que si el numero de elementos a navegar es igual o menor (=<) a los items (i) el nav no se va a ver, ya que el carusel entiende que no hay nada items fuera en los que navegar
    dots: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>', //! estas son clases de fontawesome, debes intercambiarlas por tus icons ya que yo no tengo acceso a los assets
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      812: {
        items: 2
      },
      1166: {
        items: 3
      }
    }
  }
}