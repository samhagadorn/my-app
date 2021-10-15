import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRedact]'
})
export class RedactDirective {

  constructor(private elemRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.redact('black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.redact('');
  }

  private redact(color: string) {
    this.elemRef.nativeElement.style.backgroundColor = color;
  }

}
