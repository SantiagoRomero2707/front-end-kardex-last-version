import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-kardex',
  templateUrl: './menu-kardex.component.html',
  styleUrls: ['./menu-kardex.component.scss']
})
export class MenuKardexComponent {

  constructor(private router:Router){

  }

  onKardex():void{}

  onRegistrarKardex():void{
    this.router.navigate(['/kardex/new']);
  }

  onEditarKardex():void{
    this.router.navigate(['/kardex/update']);
  }

  onEliminarKardex():void{
    this.router.navigate(['/kardex/delete']);
  }

  onConsultarKardexs():void{
    this.router.navigate(['/kardex/inquire']);
  }

  onConsultarKardex():void{
    this.router.navigate(['/kardex/inquire/detail']);
  }

}
