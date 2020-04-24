import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private apiUrl: HttpClient) {}

  private baseUrl = 'https://ceep.herokuapp.com/cartoes/carregar/?usuario=pedro@email.com.br'

  getResult(){
<<<<<<< HEAD
    return this.apiUrl.get(this.apiUrl + "carregar")
=======
    return this.http.get(this.apiUrl + "carregar")
    console.log("Aqui")
>>>>>>> 3e471c089556cfb3bd4ba56850cb069e8aedd4b5
  }

  // postResult(){
  //   return this.http.post(
  //     this.apiUrl + "salvar",
  //     body{ },)
  // }

}
