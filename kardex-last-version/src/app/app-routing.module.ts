import { ReportKardexComponent } from './reports/report-kardex/report-kardex.component';
import { DetailKardexComponent } from './crud/kardex/detail-kardex/detail-kardex.component';
import { DeleteKardexComponent } from './crud/kardex/delete-kardex/delete-kardex.component';
import { EditKardexComponent } from './crud/kardex/edit-kardex/edit-kardex.component';
import { ListKardexComponent } from './crud/kardex/list-kardex/list-kardex.component';
import { MenuKardexComponent } from './crud/kardex/menu-kardex/menu-kardex.component';
import { NewKardexComponent } from './crud/kardex/new-kardex/new-kardex.component';
import { DetailProductComponent } from './crud/product/detail-product/detail-product.component';
import { ListProductComponent } from './crud/product/list-product/list-product.component';
import { DeleteProductComponent } from './crud/product/delete-product/delete-product.component';
import { EditProductComponent } from './crud/product/edit-product/edit-product.component';
import { MenuProductComponent } from './crud/product/menu-product/menu-product.component';
import { NewProductComponent } from './crud/product/new-product/new-product.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { ProdGuardService as guard} from './guards/prod-guard.service';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';



const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'product/new', component: NewProductComponent, canActivate: [guard], data: { expectedRol: ["ADMIN","USER"] }},
  {path: 'product/menu', component: MenuProductComponent, canActivate: [guard], data: { expectedRol: ["ADMIN","USER"] }},
  {path: 'product/inquire', component: ListProductComponent, canActivate: [guard], data: { expectedRol: ["ADMIN","USER"] }},
  {path: 'product/inquire/update/:id', component: EditProductComponent, canActivate: [guard], data: { expectedRol: ["ADMIN"] }},
  {path: 'product/inquire/delete/:id', component: DeleteProductComponent, canActivate: [guard], data: { expectedRol: ["ADMIN"] }},
  {path: 'product/inquire/detail/:id', component: DetailProductComponent, canActivate: [guard], data: { expectedRol: ["ADMIN","USER"] }},
  {path: 'kardex/new', component: NewKardexComponent, canActivate: [guard], data: { expectedRol: ["ADMIN","USER"] }},
  {path: 'kardex/menu', component: MenuKardexComponent, canActivate: [guard], data: { expectedRol: ["ADMIN","USER"] }},
  {path: 'kardex/inquire', component: ListKardexComponent, canActivate: [guard], data: { expectedRol: ["ADMIN","USER"] }},
  {path: 'kardex/inquire/update/:id', component: EditKardexComponent, canActivate: [guard], data: { expectedRol: ["ADMIN"] }},
  {path: 'kardex/inquire/delete/:id', component: DeleteKardexComponent, canActivate: [guard], data: { expectedRol: ["ADMIN"] }},
  {path: 'kardex/inquire/detail/:id', component: DetailKardexComponent, canActivate: [guard], data: { expectedRol: ["ADMIN","USER"] }},
  {path: 'kardex/report', component: ReportKardexComponent, canActivate: [guard], data: { expectedRol: ["ADMIN","USER"] }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
