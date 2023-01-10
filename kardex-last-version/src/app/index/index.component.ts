import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/auth/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isLogged = false;
  nombreUsuario = '';


  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    }else{
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  onKardex(): void{
    this.router.navigate(['/kardex/menu']);
  }

  onProduct(): void{
    this.router.navigate(['/product/menu']);
  }

}
