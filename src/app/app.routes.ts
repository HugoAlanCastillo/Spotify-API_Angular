//Importacion Rutas
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

//Arreglo de todas las Rutas
export const ROUTES: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    //Redireccion al Home
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

