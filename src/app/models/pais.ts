export class Pais {
    casosActivos:string;
    nombrePais:string;
    casosTotales:string;
    muertes:string;
    recuperados:string;

    population:string;
    ranking:string;

    public Pais(casosActivos?:string,nombrePais?:string,casosTotales?:string,muertes?:string,recuperados?:string,population?:string,ranking?:string){
        this.casosActivos=casosActivos;
        this.nombrePais=nombrePais;
        this.casosTotales=casosTotales;
        this.muertes=muertes;
        this.recuperados=recuperados;

        this.population=population;
        this.ranking=ranking;
    }
}
