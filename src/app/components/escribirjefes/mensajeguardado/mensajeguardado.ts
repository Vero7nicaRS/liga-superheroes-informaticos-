import { Component, Input } from '@angular/core';
import { MensajeSuperJefe } from '../../../models/mensaje-super-jefe';

@Component({
  selector: 'app-mensajeguardado',
  imports: [],
  templateUrl: './mensajeguardado.html',
  styleUrl: './mensajeguardado.css',
})
export class Mensajeguardado {

// Recibimos del componente padre  "Escribirjefes" un "mensaje" que es del tipo "MensajeSuperJefe".
  @Input() mensaje! : MensajeSuperJefe;

}
