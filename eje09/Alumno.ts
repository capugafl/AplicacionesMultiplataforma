interface Alum{
    nctrl:string,
    nombre:string,
    apellidos:string,
    promedio:number,
    genero:string,
    f_nac:string,
    activo:boolean
}

export class Alumno{
    arreglo=Array<Alum>();

    constructor(){}
agregar(ncontrol:string ,nombre:string,apellido:string,promedio:number,genero:string
        ,fecha:string,activo:boolean) {
        let nal:any
        nal={ nctrl:ncontrol,
            nombre:nombre,
            apellidos:apellido,
            promedio:promedio,
            genero:genero,
            f_nac:fecha,
            activo:activo};
        this.arreglo.push(nal);
        this.imprimir();
    }

borrar(nc:string){
        for(var i=0;i<this.arreglo.length;i++){
            if(this.arreglo[i].nctrl==nc){
                this.arreglo.splice(i,1);
            }
        }
        this.imprimir();
    }

actualizar(nc:string ,n:string,a:string,p:number,g:string,f:string,ac:boolean){
        let nal:any
        nal={ nctrl:nc,
            nombre:n,
            apellidos:a,
            promedio:p,
            genero:g,
            f_nac:f,
            activo:ac};
        for(var i=0;i<this.arreglo.length;i++){
            if(this.arreglo[i].nctrl==nc){
                this.arreglo[i]=nal;
            }
        }
        this.imprimir();
    }

imprimir(){
        for(let i=0;i<this.arreglo.length;i++){
                console.log(this.arreglo[i]);
        }
    }
}