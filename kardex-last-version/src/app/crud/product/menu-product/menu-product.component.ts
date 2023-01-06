import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-product',
  templateUrl: './menu-product.component.html',
  styleUrls: ['./menu-product.component.scss']
})
export class MenuProductComponent {

  constructor(private router:Router){

  }

  onKardex():void{}

  onRegistrarProducto():void{
    this.router.navigate(['/product/new']);
  }

  onEditarProducto():void{
    this.router.navigate(['/product/update']);
  }

  onEliminarProducto():void{
    this.router.navigate(['/product/delete']);
  }

  onConsultarProductos():void{
    this.router.navigate(['/product/inquire']);
  }

  onConsultarProducto():void{
    this.router.navigate(['/product/inquire/detail']);
  }

}
