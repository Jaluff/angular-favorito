import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritosService } from '../../servicios/favorito.service';
import { Favorito } from '../../models/favorito';

@Component({
  selector: 'app-favorito-detail',
  templateUrl: './favorito-detail.component.html',
  styleUrls: ['./favorito-detail.component.css'],
  providers: [FavoritosService]
})
export class FavoritoDetailComponent implements OnInit {
  public favorito: Favorito;
  errorMessage;

  constructor(  private _favoritoService: FavoritosService,
                private _route: ActivatedRoute,
                private _router: Router
              ) {
  }

  ngOnInit() {
    this.getFavorito();
  }

  getFavorito() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];

      this._favoritoService.getfavorito(id).subscribe(
          response => {
            this.favorito = response.favorito;
            // console.log(response.favorito);
            if (!this.favorito) {
              this._router.navigate(['/']);
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
    });
  }

}
