import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  // Para aplicar somente a um tipo de elemento coloca-se no selector ex: p[fundoAmarelo], aplicar só a parágrafos (não esquecer de fazer o import)

  // Por boas práticas, é recomendado não suar o ElementRef por questões de segurança
  // No lugar dele usar o Renderer

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { 
    console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'; // Exemplo com ElementRef
    this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow'); // exemplo com Renderer
  }

}
