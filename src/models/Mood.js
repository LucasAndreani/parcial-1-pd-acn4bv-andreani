export default class Mood {
    constructor (fecha, estado, intensidad, valencia) {
        this.fecha = fecha;
        this.estado = estado;
        this.intensidad = intensidad;
        this.valencia = valencia;
    }

    resumen() {
        return `${this.fecha}: ${this.estado} (Intensidad: ${this.intensidad}, Valencia: ${this.valencia})`;
    }
}