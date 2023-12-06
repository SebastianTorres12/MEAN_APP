export class Tarea {
    _id?: number;
    nombre: string;
    detalle: string;
    fecha_ini: Date;
    fecha_fin: Date;

    constructor(nombre: string, detalle: string, fecha_ini: Date, fecha_fin: Date) {
        this.nombre = nombre;
        this.detalle = detalle;
        this.fecha_ini = fecha_ini;
        this.fecha_fin = fecha_fin;
    }
}