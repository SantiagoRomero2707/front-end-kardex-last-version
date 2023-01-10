import { Kardex } from './../../../models/crud/kardex';
import { KardexService } from './../../../service/models/kardex.service';
import { Product } from '../../../models/crud/product';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/auth/token.service';


@Component({
  selector: 'app-new-kardex',
  templateUrl: './new-kardex.component.html',
  styleUrls: ['./new-kardex.component.scss']
})


export class NewKardexComponent implements OnInit {
  title = 'Registrar producto';
  public form!: FormGroup;
  errorMsj!: string;
  isLogged = false;
  nombreUsuario = '';
  
  constructor(
    private tokenService: TokenService,
    private router:Router, 
    private kardexService: KardexService,
    private formBuilder:FormBuilder,
    private toastr: ToastrService){}

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      descripciónMovimiento: [''],
      cantidadEntrada: [''],
      valorUnitarioEntrada: [''],
      valorTotalEntrada: [''],
      cantidadSalida: [''],
      valorUnitarioSalida: [''],
      valorTotalSalida: [''],   
      cantidadSaldos: [''],
      valorUnitarioSaldos: [''],
      valorTotalSaldos: [''],
      fkIdMovimiento: [''], // Esto hay que ponerlo automático
      fkIdProducto: [''], // Esto hay que ponerlo automático
      fkIdUser: [''], // Esto hay que ponerlo automático
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    }else{
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  onNewProduct(): void{
    const nuevoKardex = new Kardex(
      this.form.value.descripciónMovimiento,
      this.form.value.cantidadEntrada,
      this.form.value.valorUnitarioEntrada,
      this.form.value.valorTotalEntrada,
      this.form.value.cantidadSalida,
      this.form.value.valorUnitarioSalida,
      this.form.value.valorTotalSalida,    
      this.form.value.cantidadSaldos,
      this.form.value.valorUnitarioSaldos,
      this.form.value.valorTotalSaldos,
      this.form.value.fkIdMovimiento,
      this.form.value.fkIdProducto,
      this.form.value.fkIdUser);

    this.kardexService.save(nuevoKardex).subscribe(
      data => {
        this.toastr.success('Producto creado', 'OK',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.onCleanForm();
        this.router.navigate(['/kardex/inquire']);
      },
      err => {
        this.errorMsj = err.error.mensaje;
        this.toastr.error(this.errorMsj, 'Fail',{
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    )
  }

  onCleanForm(): void{
    this.form = this.formBuilder.group({
      nombreProducto: [''],
      precioUnitario: [''],
      nitProducto: [''],
      proveedor: ['']
    });
  }
}
