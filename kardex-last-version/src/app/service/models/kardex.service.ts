import { Kardex } from '../../models/crud/kardex';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KardexService {

  kardexURL = `http://localhost:8080/api/v1/kardex/`;

  constructor(private httpClient: HttpClient) { }

  //Retornar una lista de productos
  public lista(): Observable<Kardex[]> {
    return this.httpClient.get<Kardex[]>(this.kardexURL + `list`);
  }

  //Retornar las característica de un producto a partir de su id
  public detail(id: number): Observable<Kardex> {
    return this.httpClient.get<Kardex>(this.kardexURL + `detail/${id}`);
  }

//Retornar las característica de un producto a partir de su nombre
  public detailName(nombre: string): Observable<Kardex> {
    return this.httpClient.get<Kardex>(this.kardexURL + `detailname/${nombre}`);
  }

  //Crear un producto
  public save(product: Kardex): Observable<any> {
    return this.httpClient.post<any>(this.kardexURL + `create`, product);
  }

  //Actualizar un producto
  public update(id: number, producto: Kardex): Observable<any> {
    return this.httpClient.put<any>(this.kardexURL + `update/${id}`, producto);
  }

  //Eliminar un producto
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.kardexURL + `delete/${id}`);
  }
}
