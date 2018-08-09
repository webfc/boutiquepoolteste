import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http-service.service';

@Component({
  selector: 'app-fetch-data',
  providers: [HttpService],
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public cadastros: Cadastros[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Cadastros[]>(baseUrl + 'api/Default').subscribe(result => {
      console.log(JSON.stringify(result));

      this.cadastros = result;
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
