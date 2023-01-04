import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../../service/product.service';
import { TokenService } from './../../../service/token.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Product } from 'src/app/models/crud/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  title = 'Editar un producto';
  public form!: FormGroup;
  errorMsj!: string;
  isLogged = false;
  nombreUsuario= '';
  product: any = null;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private productService: ProductService,
    private formBuilder:FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnIntit(): void{
    console.log('intentando iniciar')
    const id = this.activatedRoute.snapshot.params['id'];
    this.productService.detail(id).subscribe(
      data =>{
        this.product = data;
        console.log(data);
        this.form = this.formBuilder.group({
          nombreProducto: data.nombreProducto,
          precioUnitario: data.precioUnitario,
          nitProducto: data.nitProducto,
          proveedor: data.proveedor
        });
      },
      err =>{
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        
        this.router.navigate(['/']);
      });

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    }else{
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  onEditProduct():void{

  }

}
