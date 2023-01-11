export interface KardexI{
    idKardex:number;
    descripciónMovimiento: String;
    cantidadEntrada: number;
    valorUnitarioEntrada: number;
    valorTotalEntrada: number;
    cantidadSalida: number;
    valorUnitarioSalida: number;
    valorTotalSalida: number;    
    cantidadSaldos: number;
    valorUnitarioSaldos: number;
    valorTotalSaldos: number;
    fkIdMovimiento: number;
    fkIdProducto: number;
    fkIdUser: String;
}