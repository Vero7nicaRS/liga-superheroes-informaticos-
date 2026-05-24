import { Component } from '@angular/core';
import { Heroe } from '../../models/heroe';
import { CommonModule } from '@angular/common';
import { Supervillano } from './supervillano/supervillano';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-supervillanos',
  imports: [CommonModule, Supervillano, FormsModule], // Se añade "Supervillano" y "FormsModule" para utilizar el formulario para el modal.
  templateUrl: './supervillanos.html',
  styleUrl: './supervillanos.css',
})
export class Supervillanos {

  /* Controla el botón de "Firmar la paz" y "Declarar la guerra".
    Si está a "true" significa que hay guerra. Si está a "false" significa que hay paz.
  */
  firmarDeclarar : boolean = true;
  villanos: Heroe[] = [];

  villanoImagen: Heroe = new Heroe('', '', 0, 0, 0, 0, 0, 0, '', '', '', '', 0);


  /*
  id: string;
    nombre: string;
    inteligencia: number;
    fuerza: number;
    velocidad: number;
    durabilidad: number;
    poder: number;
    combate: number;
    descripcion: string ='';
    imagen: string;
    alineacion: string = '';
    tipo: string = '';
    email: string = ''; 
    numeroMedallas: number = 0;

  */
  // Añadimos la lista de supervillanos
  // A la hora de inicializar el componente se utiliza "ngOnInit()"
    ngOnInit(): void {
      this.villanos = [
        new Heroe('6', 'Cliente IA', 85, 40, 95, 50, 45, 35, "Cliente_IA.png", "Un villano que utiliza la inteligencia artificial para sus planes malvados", "enemigo", "Negocio", 0),
        new Heroe('7', 'Señor de los bugs', 90, 30, 80, 60, 50, 40, "Bug_senior.png", "Un villano que explota los errores y fallos del sistema para sus fines", "enemigo", "QA", 0),
        new Heroe('8', 'Estimador matador', 75, 85, 65, 70, 55, 45, "Deadline_imposible.png", "Un villano que se alimenta de las pesadillas de sus víctimas", "enemigo", "Analista", 0),
        new Heroe('9', 'Vendehumo cloud', 80, 70, 90, 60, 50, 40, "Cloud_master.png", "Un villano que promete soluciones en la nube pero solo causa problemas", "enemigo", "Analista", 0),
      ];
    }
 

  eliminarSupervillano(villano: Heroe){ // (click)="eliminarSupervillano()"
    //this.eliminarVillano.emit(this.supervillano);
    this.villanos = this.villanos.filter(v => v !== villano);
  }
  
  verImagenSupervillano(villano: Heroe){ // (click)="verImagenSupervillano()"
    //this.verImagenVillano.emit(this.supervillano);
    console.log("Villanito andante, ", villano);
    this.villanoImagen = {...villano};
    this.mostrarModal();
  }

  mostrarModal() {
    const modalElement = document.getElementById('modal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }


}
