import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','red'); // exemplo com Renderer
  }

  @HostListener('mouseleave') onMouseLeave(){
    this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color',''); // exemplo com Renderer
  }

  constructor( private _elementRef: ElementRef, private _renderer: Renderer) {
  }

}
