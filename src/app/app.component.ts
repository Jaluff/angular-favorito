import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string;
  descripcion: string;
  constructor() {

    this.titulo = 'Angular-Favoritos';
    this.descripcion = 'Proyecto de angular';
  }

}
