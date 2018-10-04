import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FavoritosListComponent } from './components/favoritos-list/favoritos-list.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing, appRoutingProviders } from './app.routing';
import { FavoritoDetailComponent } from './components/favorito-detail/favorito-detail.component';


export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    FavoritosListComponent,
    FavoritoDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
