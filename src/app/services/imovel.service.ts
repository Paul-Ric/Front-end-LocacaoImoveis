import { Imovel } from './../models/imovel.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  api="localhost:5233"
  constructor(private http:HttpClient) { }

  getAllImoveis():Observable<Imovel[]>{
    let endpoint=`${this.api}/imoveis`
    return this.http.get<Imovel[]>(endpoint)
  }
  postImovel(post:Imovel):Observable<Imovel>{
    let endpoint=`${this.api}/imovel`
    return this.http.post<Imovel>(endpoint,JSON.parse(JSON.stringify(post)) )
  }
}
