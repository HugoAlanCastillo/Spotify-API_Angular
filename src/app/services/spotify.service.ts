//Servicios inyectable en otros componentes
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Decorador
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  

  constructor( private http: HttpClient) { 
    console.log('Spotify Service Listo')
  }

  //Peticiones
  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBSVuY5KTlFmblxh4K8uAqB1ElCFe9dX7IC-XRzDC-7gA2GqHlreQhKJ9AAKQ3SSFkpXO7g-W9JlQsM_i0'

    });
   return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  
  }
}
