
import { MovementService } from '../../service/models/movement.service';
import { TipoMovimiento } from 'src/app/models/crud/tipoMovimiento';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Kardex } from 'src/app/models/crud/kardex';
import { Product } from 'src/app/models/crud/product';
import { TokenService } from 'src/app/service/auth/token.service';
import { KardexService } from 'src/app/service/models/kardex.service';
import { ProductService } from 'src/app/service/models/product.service';

@Component({
  selector: 'app-report-kardex',
  templateUrl: './report-kardex.component.html',
  styleUrls: ['./report-kardex.component.scss']
})
export class ReportKardexComponent {
  listKardex: Kardex[] = [];
  products: Product[] = [];
  movementKardex: TipoMovimiento[] = [];
  roles!: string[];
  isAdmin = false;

  constructor(
    private kardexService: KardexService,
    private productoService: ProductService,
    private movimientoService: MovementService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }


  ngOnInit() {
    this.cargarData();
    this.roles = this.tokenService.getAuthorities();  
    this.isAdmin = true;
  }

  cargarData(): void {
    this.kardexService.lista().forEach(
      data => {
        this.listKardex = data;
        this.productoService.detail(this.listKardex[0]['fkIdProducto']).forEach(
          data => {
            this.products.push(data);
          }
        );

        this.movimientoService.detail(this.listKardex[0]['fkIdMovimiento']).forEach(
          data => {
            this.movementKardex.push(data);
          }
        );

      }
    );
  }

  borrar(id: any) {
    const finalId = parseInt(id);
    this.kardexService.delete(finalId).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarData();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }


}
