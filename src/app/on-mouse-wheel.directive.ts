import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnMouseWheel]'
})
export class OnMouseWheelDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mousedown') onMouseDown() {
    this.mouseClick('purple');
  };
  
  @HostListener('mouseup') onMouseUp() {
    this.mouseClick('');
  }

  private mouseClick(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
