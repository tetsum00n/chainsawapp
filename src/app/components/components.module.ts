import { PersonajeComponent } from './personaje/personaje.component';
import { IonicModule } from '@ionic/angular';
import { PersonajesComponent } from './personajes/personajes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajeComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    PersonajesComponent
  ]
})
export class ComponentsModule { }
