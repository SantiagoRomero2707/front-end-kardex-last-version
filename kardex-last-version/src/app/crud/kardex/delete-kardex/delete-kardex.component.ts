import { Kardex } from './../../../models/crud/kardex';
import { KardexService } from './../../../service/models/kardex.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/crud/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-kardex.component.html',
  styleUrls: ['./delete-kardex.component.scss']
})
export class DeleteKardexComponent implements OnInit {
  kardex!: Kardex;

  constructor(
    private kardexService: KardexService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.kardexService.detail(id).subscribe(
      data => {
        this.kardex = data;
        console.log(this.kardex);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  public onDelete(id:number):void{
    this.kardexService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/product/inquire']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );

  }


}
