import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../servicios/favorito.service';
import { Favorito } from '../../models/favorito';

@Component({
  selector: 'app-favoritos-list',
  templateUrl: './favoritos-list.component.html',
  styleUrls: ['./favoritos-list.component.css'],
  providers: [ FavoritosService ]
})


export class FavoritosListComponent implements OnInit {
  texto: string;
  errorMessage;
  ofavoritos: Favorito[];

  constructor(
    private _favoritoService: FavoritosService
  ) {
    this.texto = 'Esto es un texto de favoritos-list';
  }


  ngOnInit() {
    console.log('Favoritos list component cargado...!');
    this._favoritoService.getfavoritos().subscribe(
        result => {
          this.ofavoritos = result.favoritos;
          console.log(result.favoritos);
          if (!this.ofavoritos) {
            alert('Error en el servidor');
          }
        },
        error => {
          this.errorMessage = <any>error;

          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('Error en la paticion');
          }
        }
    );
  }

}
