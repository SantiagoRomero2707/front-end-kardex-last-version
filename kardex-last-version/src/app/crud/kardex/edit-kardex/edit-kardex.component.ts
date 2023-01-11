import { Kardex } from '../../../models/crud/kardex';
import { KardexService } from './../../../service/models/kardex.service';
import { ProductService } from 'src/app/service/models/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/crud/impl/product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-kardex.component.html',
  styleUrls: ['./edit-kardex.component.scss']
})

export class EditKardexComponent implements OnInit{
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
        this.kardex= data;
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

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.kardexService.update(id, this.kardex).subscribe(
      data => {
        this.toastr.success('Producto Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/product/inquire']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

}