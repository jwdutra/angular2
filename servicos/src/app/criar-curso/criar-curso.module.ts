import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service'; 
// Este eé um módulo de funcionalidade
// está sendo usado no módulo global porque tem a cláusula "exports", possibilitando esta ação.
// Se criarmos um módulo de funcionalidade (local do componente) e não usarmos o export, ele só poderá ser instanciado no componente local.
// Se instanciarmos localmente, vai abrir uma instância diferente, fazendo com que hajam duas instâncias.

// Se declarar um provider dentro do componente, uma instancia diferente será criada, perdendo assim o singleton

import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent],
  providers: [CursosService]
})
export class CriarCursoModule { }
