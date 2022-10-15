import { PersonajesService } from './../../services/personajes.service';
import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public personajes: Personaje[]=[];

  constructor(
    private personajesService: PersonajesService,
    ) {}

  ngOnInit(){
    this.personajesService.getPersonajes().subscribe(resp=>{
      console.log(resp.personajes);
      this.personajes = resp.personajes;
    })
  }
}
