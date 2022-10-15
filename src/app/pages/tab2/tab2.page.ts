import { Personaje } from './../../interfaces/index';
import { StorageService } from './../../services/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  get personajes():Personaje[]{
    return this.storageService.getLocalPersonajes;
  }

  constructor(private storageService:StorageService) {}

}
