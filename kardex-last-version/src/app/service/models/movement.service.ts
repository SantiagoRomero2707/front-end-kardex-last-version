import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoMovimiento } from 'src/app/models/crud/tipoMovimiento';


@Injectable({
  providedIn: 'root'
})
export class MovementService {

  movementURL = `http://localhost:8080/api/v1/movimiento/`;

  constructor(private httpClient: HttpClient) { }

  //Retornar una lista de productos
  public lista(): Observable<TipoMovimiento[]> {
    return this.httpClient.get<TipoMovimiento[]>(this.movementURL + `list`);
  }

  //Retornar las característica de un producto a partir de su id
  public detail(id: number): Observable<TipoMovimiento> {
    return this.httpClient.get<TipoMovimiento>(this.movementURL + `detail/${id}`);
  }

//Retornar las característica de un producto a partir de su nombre
  public detailName(nombre: string): Observable<TipoMovimiento> {
    return this.httpClient.get<TipoMovimiento>(this.movementURL + `detailname/${nombre}`);
  }

  //Crear un producto
  public save(movement: TipoMovimiento): Observable<any> {
    return this.httpClient.post<any>(this.movementURL+`create`, movement);
  }

  //Actualizar un producto
  public update(id: number, movement: TipoMovimiento): Observable<any> {
    return this.httpClient.put<any>(this.movementURL + `update/${id}`, movement);
  }

  //Eliminar un producto
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.movementURL + `delete/${id}`);
  }
}
