
import { HttpService } from '../http-service.service';
import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-cadastro-component', 
  providers: [HttpService] ,
  templateUrl: './cadastro.component.html'
})



export class CadastroComponent {

  postData: string;
  sucesso: boolean;
  erro: boolean;
  mensagemerro: string; 
  cadastroForm: NgForm;
  private isNovo: boolean = true;
  baseUrl: string


  constructor(private httpService: HttpService) { }


  onTestPost(cadastroForm: NgForm) {

    console.log(cadastroForm.value);
    this.baseUrl = '/api/Default/Add';

   
    this.httpService.postJSON(cadastroForm.value, this.baseUrl)
      .subscribe(response => {

        console.log(response);

         this.trataRetorno(response); 
        },
        error => {
              this.trataErro(error);
        });

      //.map(res => res.json())
      //.subscribe(
      //result => this.trataRetorno(result),
      //err => this.trataErro(err)     
  };

  public trataRetorno(data) {

    console.log(data);
    this.sucesso = true;
    this.erro = false; 
  }


  public trataErro(error) {

    this.mensagemerro = error.statusText;
    this.erro = true;
    this.sucesso = false; 
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-group': true,
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    }
  }


}
