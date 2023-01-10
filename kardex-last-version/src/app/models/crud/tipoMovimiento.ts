export class TipoMovimiento{
    idMovimiento!: number;
    fechaMovimiento!: String;
    tipoMovimiento!:String;

    constructor(fechaMovimiento: String, tipoMovimiento:String){        
        this.fechaMovimiento = fechaMovimiento;
        this.tipoMovimiento = tipoMovimiento
    }

}