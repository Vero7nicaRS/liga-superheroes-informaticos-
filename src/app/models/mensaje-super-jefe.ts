// Se crea la clase "MensajeSuperJefe" para utilizarlo para el formulario de "escribirjefes"
export class MensajeSuperJefe {
    remitente: string;
    edad: number;
    mensaje: string;

    constructor(remitente: string, edad: number, mensaje:string){
        this.remitente = remitente;
        this.edad = edad;
        this.mensaje = mensaje;
    }

}