import { Product } from 'src/app/models/crud/product';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { TokenService } from 'src/app/service/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products: Product[] = [];
  roles!: string[];
  isAdmin = false;

  constructor(
    private productoService: ProductService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }


  ngOnInit() {
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities();  
    this.isAdmin = true;
  }

  cargarProductos(): void {
    this.productoService.lista().forEach(
      data => {
        this.products = data;
      }
    );
  }

  borrar(id: any) {
    const finalId = parseInt(id);
    this.productoService.delete(finalId).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
