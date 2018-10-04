import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritosListComponent } from './components/favoritos-list/favoritos-list.component';
import { FavoritoDetailComponent } from './components/favorito-detail/favorito-detail.component';

const appRoutes: Routes = [
    {path: '', component: FavoritosListComponent},
    {path: 'marcador/:id', component: FavoritoDetailComponent },
    {path: '**',  component: FavoritosListComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
