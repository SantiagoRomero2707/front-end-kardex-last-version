import { KardexService } from './../../../service/models/kardex.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Kardex } from '../../../models/crud/kardex';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-kardex.component.html',
  styleUrls: ['./detail-kardex.component.scss']
})
export class DetailKardexComponent implements OnInit{
  kardex: Kardex | null = null;

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
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/product/menu']);
  }


}
