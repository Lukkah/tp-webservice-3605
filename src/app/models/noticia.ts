export class Noticia {
    id:number;
    tit:string;
    des:string;
    img:string;

    noticia(id?:number,tit?:string,des?:string,img?:string){
        this.id=id;
        this.tit=tit;
        this.des=des;
        this.img=img;
    }
}
