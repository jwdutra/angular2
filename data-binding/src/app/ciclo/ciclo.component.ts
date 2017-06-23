import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

   @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    // Quando as propriedades são resolvidades
    // os valores de this.mapWindow e this.mapControls
    // também serão resolvidos para os componentes
    // <map-window> e <map-controls>
    this.log('ngOnInit');
  }

  ngOnChanges(){
    // Chamado após nosso binding ser checado, validando
    // se um dos bindings foi alterado
    //
    // o parâmetro `changes` é um objeto no formato:
    // {
    //   'prop': PropertyUpdate
    // }
    this.log('ngOnChanges');
  }

  ngDoCheck(){
    // Detecção de mudanças customizável
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    // Conteúdo do componente foi inicializado
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    // Conteúdo do componente foi checado
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    // View do componente foi inicializada
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    // View do componente foi checada/validada
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    // Evento é invocado quando o componente é destruído
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
