import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
