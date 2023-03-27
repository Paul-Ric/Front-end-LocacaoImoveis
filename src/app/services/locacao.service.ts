import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {
  api="localhost:5233"

  constructor(private http:HttpClient) { }
}
