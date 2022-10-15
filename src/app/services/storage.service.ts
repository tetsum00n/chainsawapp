import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Personaje } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private _personajes:Personaje[] = [];

  get getLocalPersonajes(){
    return [...this._personajes];
  }

  constructor(private storage: Storage) {
    this.init();
   }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavorites();
  }

  async saveOrRemovePersonaje(personaje:Personaje){

    const exists = this._personajes.find(localPersonaje=>localPersonaje._id===personaje._id);
    if(exists){
      this._personajes = this._personajes.filter(localPersonaje=>localPersonaje._id!=personaje._id);
    }else{
      this._personajes = [personaje,...this._personajes];
    }

    this._storage.set('personajes',this._personajes);
  }

  async loadFavorites(){
    try {
      const personajes = await this._storage.get('personajes');
      this._personajes = personajes || [];
    } catch (error){
      console.log(error);
    }
  }

  personajeInFavorites(personaje:Personaje){
    return !!this._personajes.find(localPersonaje=>localPersonaje._id===personaje._id);
  }

}
