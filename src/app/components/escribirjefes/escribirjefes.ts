import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajeSuperJefe } from '../../models/mensaje-super-jefe';
import { Mensajeguardado } from './mensajeguardado/mensajeguardado';

/*
  Implemente un nuevo enlace en el header “Escribir al Superjefe”(respete SPA). 
  En este componente debe haber un formulario 
  con un campo “Remitente” (texto de máximo 20 caracteres obligatorio), 
  un campo “Edad” (numérico, máximo 2 cifras obligatorio) 
  y un campo “Mensaje” (texto mínimo de 10 y de máximo 14 caracteres, obligatorio). 
  Al escribir un mensaje debe aparecer como guardado en la propia vista en un componente diferente al formulario.
*/

@Component({
  selector: 'app-escribirjefes',
  imports: [FormsModule, ReactiveFormsModule, Mensajeguardado], // Se añade "FormsModule" para utilizar el formulario para el modal.
  templateUrl: './escribirjefes.html',
  styleUrl: './escribirjefes.css',
})
export class Escribirjefes {

// Crear un formulario
  formularioSuperjefe : FormGroup;

// Mensaje que se guarda
  mensajePropuesto : MensajeSuperJefe = new MensajeSuperJefe('',0,'');


  constructor(private formulariosj : FormBuilder){
    this.formularioSuperjefe = this.formulariosj.group({
      remitente: ['', [Validators.maxLength(20), Validators.required]], // “Remitente” (texto de máximo 20 caracteres obligatorio), 
      edad: [0, [Validators.min(0), Validators.max(99), Validators.required]], // “Edad” (numérico, máximo 2 cifras obligatorio) 
      mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]]// “Mensaje” (texto mínimo de 10 y de máximo 14 caracteres, obligatorio). 
    })
  }

  // Cuando se pulsa el botón "Enviar mensaje al Superjefe", se guarda su información y se muestra en otro componente.
  registrarMensajeSJ(){

    // Se comprueba que el formulario no tenga datos inválidos.
    if(this.formularioSuperjefe.invalid){
      this.formularioSuperjefe.markAllAsTouched();
      return;
    }
    // Se obtiene la información del formulario.
    const formularioCompleto= this.formularioSuperjefe.value;
    const mensajeSuperJefe = new MensajeSuperJefe(
      formularioCompleto.remitente,
      formularioCompleto.edad,
      formularioCompleto.mensaje
    );

    // Se asigna el mensaje.
    this.mensajePropuesto = mensajeSuperJefe;
    console.log('Se envía el mensaje al superjefe...');
    
    // Se vacía el formulario.
    this.formularioSuperjefe.reset();
  }

}
