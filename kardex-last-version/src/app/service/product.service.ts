import { HttpClient } from '@angular/common/http';
import { Product } from '../models/crud/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = `http://localhost:8080/api/producto/`;

  constructor(private httpClient: HttpClient) { }

  //Retornar una lista de productos
  public lista(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productURL + `list`);
  }

  //Retornar las característica de un producto a partir de su id
  public detail(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.productURL + `detail/${id}`);
  }

//Retornar las característica de un producto a partir de su nombre
  public detailName(nombre: string): Observable<Product> {
    return this.httpClient.get<Product>(this.productURL + `detailname/${nombre}`);
  }

  //Crear un producto
  public save(product: Product): Observable<any> {
    return this.httpClient.post<any>(this.productURL+`create`, product);
  }

  //Actualizar un producto
  public update(id: number, producto: Product): Observable<any> {
    return this.httpClient.put<any>(this.productURL + `update/${id}`, producto);
  }

  //Eliminar un producto
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productURL + `delete/${id}`);
  }
}
