import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','red'); // exemplo com Renderer
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color',''); // exemplo com Renderer
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding ('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'red';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
