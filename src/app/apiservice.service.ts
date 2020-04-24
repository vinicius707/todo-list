import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private apiUrl: HttpClient) {}

  private baseUrl = 'https://ceep.herokuapp.com/cartoes/carregar/?usuario=pedro@email.com.br'

  getResult(){
    return this.apiUrl.get(this.apiUrl + "carregar")
  }

  // postResult(){
  //   return this.http.post(
  //     this.apiUrl + "salvar",
  //     body{ },)
  // }

}
