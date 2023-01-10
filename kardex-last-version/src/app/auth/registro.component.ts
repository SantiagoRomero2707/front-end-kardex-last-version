import { TokenService } from './../service/token.service';
import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../models/auth/nuevo-usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  nuevoUsuario!: NuevoUsuario;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  errMsj!: string;
  isLogged = false;

  constructor(
    private TokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    if( this.TokenService.getToken()){
      this.isLogged = true;
    }
  }

  onRegister(): void{
    this.nuevoUsuario = new NuevoUsuario(this.firstname, this.lastname, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.toastr.success('Cuenta creada', 'OK',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fail',{
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    )
  }

}
