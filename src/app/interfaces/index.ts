export interface PersonajesResponse {
  ok:         boolean;
  personajes: Personaje[];
}

export interface Personaje {
  _id:          string;
  nombre:       string;
  nombreRomaji: string;
  estado:       string;
  edad:         string;
  especie:      string;
  imagen:       string;
  __v:          number;
}
