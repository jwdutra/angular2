import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';

import { CursosService } from './cursos/cursos.service'; 
// Se declarmos o serviço aqui no módulo de escopo global da aplicação, e incluíndo no providers, terá escopo global e só será instanciado uma vez.
// Isto determiona um singleton

// Se criarmos um módulo junto ao componente (módulo de funcionalidade) e declararmso o serviço neste módulo, o serviço será instanciado localmente no component.
// podendo assim termos mais de uma instância de serviço.

// Mesmo sendo criado localmente o módulo pode ser exportado para ser uasdo em outros locais




import { CriarCursoModule } from './criar-curso/criar-curso.module';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
