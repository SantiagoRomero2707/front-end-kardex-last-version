import { Kardex } from '../../../models/crud/kardex';
import { Component } from '@angular/core';
import { TokenService } from 'src/app/service/auth/token.service';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from 'src/app/service/models/kardex.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-kardex.component.html',
  styleUrls: ['./list-kardex.component.scss']
})
export class ListKardexComponent {
  listKardex: Kardex[] = [];
  roles!: string[];
  isAdmin = false;

  constructor(
    private kardexService: KardexService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }


  ngOnInit() {
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities();  
    this.isAdmin = true;
  }

  cargarProductos(): void {
    this.kardexService.lista().forEach(
      data => {
        this.listKardex = data;
        console.log(this.listKardex);
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
