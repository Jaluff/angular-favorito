import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Favorito } from '../models/favorito';

@Injectable()
export class FavoritosService {
    public url: string;

    constructor( private _http: Http) {
        this.url =  'http://localhost:3678/api/';
    }

    getfavoritos() {
        return this._http.get(this.url + 'favoritos').pipe(map(res => res.json()));
    }

    getfavorito (id: string) {
        return this._http.get(this.url + 'favorito/' + id).pipe(map(res => res.json()));
    }
}
