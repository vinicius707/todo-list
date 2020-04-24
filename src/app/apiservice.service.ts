import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl = "https://ceep.herokuapp.com/cartoes/";

  constructor(private http: HttpClient) { }

  getResult(){
    return this.http.get(this.apiUrl + "/carregar")
  }

  // postResult(){
  //   return this.http.post(
  //     this.apiUrl + "/salvar",
  //     task)
  // }

}
