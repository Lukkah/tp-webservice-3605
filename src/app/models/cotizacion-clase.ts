export class CotizacionClase {
    result:string;
    to_type:string;
    from_value:string;
    from_type:string;
    result_float:string;


    public CotizacionClase(result?:string,to_type?:string,from_value?:string,from_type?:string,result_float?:string){
        this.result=result;
        this.to_type=to_type;
        this.from_value=from_value;
        this.from_type=from_type;
        this.result_float=result_float;
    }
}
