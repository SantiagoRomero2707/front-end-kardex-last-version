import { ReportKardexComponent } from './reports/report-kardex/report-kardex.component';
import { NewKardexComponent } from './crud/kardex/new-kardex/new-kardex.component';

import { ListProductComponent } from './crud/product/list-product/list-product.component';
import { DeleteProductComponent } from './crud/product/delete-product/delete-product.component';
import { EditProductComponent } from './crud/product/edit-product/edit-product.component';
import { MenuProductComponent } from './crud/product/menu-product/menu-product.component';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './navigation/menu.component';
import { RegistroComponent } from './auth/registro.component';
import { NewProductComponent } from './crud/product/new-product/new-product.component';
import { DetailProductComponent } from './crud/product/detail-product/detail-product.component';
import { MenuKardexComponent } from './crud/kardex/menu-kardex/menu-kardex.component';
import { EditKardexComponent } from './crud/kardex/edit-kardex/edit-kardex.component';
import { DeleteKardexComponent } from './crud/kardex/delete-kardex/delete-kardex.component';
import { ListKardexComponent } from './crud/kardex/list-kardex/list-kardex.component';
import { DetailKardexComponent } from './crud/kardex/detail-kardex/detail-kardex.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent, 
    LoginComponent,
    RegistroComponent,
    NewProductComponent,
    MenuProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    ListProductComponent,
    DetailProductComponent,
    NewKardexComponent,
    MenuKardexComponent,
    EditKardexComponent,
    DeleteKardexComponent,
    ListKardexComponent,
    DetailKardexComponent,
    ReportKardexComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

