import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {QuantidadeModel} from "../models/quantidade.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    API = `http://localhost:3000/`

  constructor(
      private http: HttpClient
  ) { }

    cadastrar(object, tipo):Observable<QuantidadeModel>{
        console.log(object)
        return this.http.post<QuantidadeModel>(`${this.API}${tipo}`, object);
    }

    listar(tipo): Observable<any> {
        return this.http.get(`${this.API}${tipo}`);
    }

    excluir(object, tipo): Observable<any> {
        return this.http.delete(`${this.API}${tipo}/${object}`);
    }


}
