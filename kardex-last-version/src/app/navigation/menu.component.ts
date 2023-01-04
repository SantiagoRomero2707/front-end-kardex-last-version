import { TokenService } from '../service/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLogged = false;
  nombreUsuario = '';
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged= true;
      this.nombreUsuario = this.tokenService.getUserName();
    }else{
      this.isLogged=false;
      this.nombreUsuario = '';
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
