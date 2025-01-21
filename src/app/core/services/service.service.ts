import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {QuantidadeModel} from "../models/quantidade.model";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    API = `http://localhost:3000/`

  constructor(
      private http: HttpClient,
      private _location: Location,
  ) { }

    cadastrar(url, object: QuantidadeModel):Observable<any>{
        console.log(object)
        return this.http.post<any>(`${url}`, object);
    }

    listar(url): Observable<any> {
        return this.http.get(url);
    }

    excluir(url, object): Observable<any> {
        return this.http.delete(`${url}${object}`);
    }

    alterar(url, object: string):Observable<any>{
        return this.http.put<any>(`${url}`, object);
    }

    sair(){
        this._location.back()
    }
}
