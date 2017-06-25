import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','red'); // exemplo com Renderer
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color',''); // exemplo com Renderer
    this.backgroundColor = '';
  }

  @HostBinding ('style.backgroundColor') backgroundColor: string;

  constructor() {

  }

}
