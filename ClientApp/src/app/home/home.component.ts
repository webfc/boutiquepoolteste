import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public forecasts: Cadastros[];
  public totalcadastros = 0;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Cadastros[]>(baseUrl + 'api/Default').subscribe(result => {
      this.forecasts = result;
      this.totalcadastros = result.length; 
    }, error => console.error(error));
  }
}
interface Cadastros {
  Nome: string;
  Email: number;
  Profissao: number;
  Desempregado: boolean;
  Idade: number;
}

