export class Product{
    id?:number;
    nombreProducto!: string;
    precioUnitario!: number;
    nitProducto!: string;
    proveedor!: string;

    constructor(nombreProducto:string, precioUnitario:number,nitProducto:string,proveedor:string){
        this.nombreProducto = nombreProducto,
        this.precioUnitario = precioUnitario;
        this.nitProducto = nitProducto;
        this.proveedor = proveedor;
    }
    
}