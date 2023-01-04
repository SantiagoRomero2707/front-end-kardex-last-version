import { LoginUsuario } from './../models/auth/login-usuario';
import { NuevoUsuario } from '../models/auth/nuevo-usuario';
import { JwtDto } from '../models/auth/jwt-dto';


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/'

  constructor(private httpClient: HttpClient) { }
  
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo' , nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<any>(this.authURL + 'login' , loginUsuario);
  }
}
