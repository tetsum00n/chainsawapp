import { StorageService } from './../../services/storage.service';
import { ActionSheetController } from '@ionic/angular';
import { Personaje } from './../../interfaces/index';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
})
export class PersonajeComponent implements OnInit {

  @Input() personaje:Personaje;
  @Input() index:number;

  constructor(private actionSheetCtrl:ActionSheetController,
    private storageService:StorageService)
    { }

  ngOnInit() {}

  async openMenu(){
    const personajeInFavorites = this.storageService.personajeInFavorites(this.personaje);
    const actionSheet = await this.actionSheetCtrl.create({
      header : 'Opciones',
      buttons: [
        {
          text: personajeInFavorites ? 'Eliminar' : 'Favoritos',
          icon: personajeInFavorites ? 'heart' : 'heart-outline',
          handler: ()=>this.onToggleFavorite()
        },
        {
          text: 'Cancelar',
          icon: 'close-outline',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();

  }

  onToggleFavorite(){
    console.log('Toggle article');
    this.storageService.saveOrRemovePersonaje(this.personaje);

  }

}
