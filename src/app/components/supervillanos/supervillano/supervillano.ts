import { Component, EventEmitter, Input, Output, OnDestroy} from '@angular/core';
import {Heroe} from "../../../models/heroe";

/*
  Se cambia el selector "app-supervillano" a "tr[supervillano]".
  Esto va a permitir que trate el componente como una "fila" en HTML.
  Ya que si se debaja como "app-supervillano", añadía todo el componente
  en la primera columna "Nombre" y no en las distintas columnas "Descripción", "Inteligencia"...
*/
@Component({
  selector: 'tr[app-supervillano]',  // Cambiar selector a "tr[app-supervillano]"
  imports: [],
  templateUrl: './supervillano.html',
  styleUrl: './supervillano.css',
})
export class Supervillano implements OnDestroy{

  // Recibimos del componente padre a un "supervillano" que es del tipo "Heroe"
  @Input() supervillano! : Heroe;

  /* 
    (click)="eliminarSupervillano()"
    (click)="verImagenSupervillano()"
    Devolvemos al componente padre los eventos "eliminarVillano" y "verImagenVillano" de los botones
    "Eliminar" y "Ver imagen", ya que es el componente quien tiene la información.
    Y por tanto, se tiene que encargar de eliminar a los villanos y de mostrar las imágenes.
  */
  @Output() eliminarVillano = new EventEmitter<Heroe>();
  @Output() verImagenVillano = new EventEmitter<Heroe>();
  
  eliminarSupervillano(){ // (click)="eliminarSupervillano()"
    this.eliminarVillano.emit(this.supervillano);
  }

  verImagenSupervillano(){ // (click)="verImagenSupervillano()"
    this.verImagenVillano.emit(this.supervillano);
  }

  ngOnDestroy(): void {
    console.log("Destruyendo...")
    alert(`El villano ${this.supervillano.nombre} ha sido eliminado de la liga de Superheroes.`);
  }


}
