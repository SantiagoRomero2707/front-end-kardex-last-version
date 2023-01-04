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
  {path: 'product/menu', component: MenuProductComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'product/edit', component: EditProductComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'product/delete', component: DeleteProductComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'product/new', component: NewProductComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'product/inquire', component: ListProductComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
