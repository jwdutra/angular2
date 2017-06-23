import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://www.jwdutra.com.br';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/';

  valorAtual: string = '';
  valorSalvo;

  isMouseOver: boolean = false;

  nomeDoCurso: string = "Curso Angular";

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Clicado');
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

    onMouseOverOut(){
        this.isMouseOver = !this.isMouseOver;
    }

    onMudouValor(evento){
        console.log(evento.novoValor);
    }

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  constructor() { }

  ngOnInit() {
  }

}
