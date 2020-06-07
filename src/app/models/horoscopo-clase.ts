export class HoroscopoClase {
    name:string;
    descripcion:string;
    rutaImg:string;
    fechaInicio:string;
    fechaFin:string;

    public HoroscopoClase(name?:string,descripcion?:string,rutaImg?:string,fechaInicio?:string,fechaFin?:string){
        this.name=name;
        this.descripcion=descripcion;
        this.rutaImg=rutaImg;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
    }
}
