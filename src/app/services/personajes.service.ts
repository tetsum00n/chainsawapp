import { PersonajesResponse } from './../interfaces/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

  getPersonajes(){
   return this.http.get<PersonajesResponse>('https://backend-personajes-csm.herokuapp.com/personaje')
  }
}
