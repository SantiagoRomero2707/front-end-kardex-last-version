import { TokenService } from '../service/auth/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdGuardService {

  realRol!: string;


  constructor(
    private tokenService:TokenService,
    private router:Router

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data['expectedRol'];
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'USER';
    roles.forEach(rol => {
      if (rol.authority === 'ADMIN') {
        console.log('Validación, bien escrita');
        this.realRol = 'ADMIN';
      }
    });


    if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
