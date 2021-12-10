import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

const url= "http://190.52.39.140/ventas/getall";
const urlLocal = "http://localhost:5077/ventas/";
//http://localhost:5077/ventas/getall

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any>{
    return this.httpClient.get(urlLocal + "getall");
  }

  readById(id: number): Observable<any>{
    return this.httpClient.get(`${urlLocal + "get"}/${id}`);
  }

  public create (data:any) : Observable<any>{
    return this.httpClient.post(urlLocal, data);
  } 

  update(id: number, data: any): Observable<any>{
    return this.httpClient.put(`${urlLocal}/${id}`, data);
  }
    
  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${urlLocal}/${id}`);
  }

  deleteAll(): Observable<any>{
    return this.httpClient.delete(urlLocal);
  }

  searchByDni(dni: number): Observable<any>{
    return this.httpClient.get(`${urlLocal + "search"}/${dni}`);
  }
}
