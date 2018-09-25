import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos-list',
  templateUrl: './favoritos-list.component.html',
  styleUrls: ['./favoritos-list.component.css']
})
export class FavoritosListComponent implements OnInit {
  texto: string;
  constructor() {
    this.texto = 'Esto es un texto de favoritos-list';
   }

  ngOnInit() {
  }

}
