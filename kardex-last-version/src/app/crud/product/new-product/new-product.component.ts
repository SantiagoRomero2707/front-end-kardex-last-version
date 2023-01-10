import { ProductService } from 'src/app/service/models/product.service';
import { Product } from './../../../models/crud/product';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/auth/token.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})


export class NewProductComponent implements OnInit {
  title = 'Registrar producto';
  public form!: FormGroup;
  errorMsj!: string;
  isLogged = false;
  nombreUsuario = '';
  
  constructor(
    private tokenService: TokenService,
    private router:Router, 
    private productService:ProductService,
    private formBuilder:FormBuilder,
    private toastr: ToastrService){}

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      nombreProducto: [''],
      precioUnitario: [''],
      nitProducto: [''],
      proveedor: ['']
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
    const nuevoProducto = new Product(
      this.form.value.nombreProducto,
      this.form.value.precioUnitario,
      this.form.value.nitProducto,
      this.form.value.proveedor);
    
    this.productService.save(nuevoProducto).subscribe(
      data => {
        this.toastr.success('Producto creado', 'OK',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.onCleanForm();
        this.router.navigate(['/product/inquire']);
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
