export class Kardex{
    idKardex!:number;
    descripciónMovimiento!: String;
    cantidadEntrada!: number;
    valorUnitarioEntrada!: number;
    valorTotalEntrada!: number;
    cantidadSalida!: number;
    valorUnitarioSalida!: number;
    valorTotalSalida!: number;    
    cantidadSaldos!: number;
    valorUnitarioSaldos!: number;
    valorTotalSaldos!: number;
    fkIdMovimiento!: number;
    fkIdProducto!: number;
    fkIdUser!: String;

    constructor(
        descripciónMovimiento: String,
        cantidadEntrada: number,
        valorUnitarioEntrada: number,
        valorTotalEntrada: number,
        cantidadSalida: number,
        valorUnitarioSalida: number,
        valorTotalSalida: number,    
        cantidadSaldos: number,
        valorUnitarioSaldos: number,
        valorTotalSaldos: number,
        fkIdMovimiento: number,
        fkIdProducto: number,
        fkIdUser: String
    ){
        this.descripciónMovimiento = descripciónMovimiento;
        this.cantidadEntrada = cantidadEntrada;
        this.valorUnitarioEntrada = valorUnitarioEntrada;
        this.valorTotalEntrada = valorTotalEntrada;
        this.cantidadSalida = cantidadSalida,
        this.valorUnitarioSalida = valorUnitarioSalida;
        this.valorTotalSalida = valorTotalSalida;    
        this.cantidadSaldos = cantidadSaldos;
        this.valorUnitarioSaldos = valorUnitarioSaldos;
        this.valorTotalSaldos = valorTotalSaldos;
        this.fkIdMovimiento = fkIdMovimiento;
        this.fkIdProducto = fkIdProducto;
        this.fkIdUser = fkIdUser
    }
    
    

}