import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  // Para aplicar somente a um tipo de elemento coloca-se no selector ex: p[fundoAmarelo], aplicar só a parágrafos 
  // 

  constructor(private _elementRef: ElementRef) { 
    console.log(this._elementRef);
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
