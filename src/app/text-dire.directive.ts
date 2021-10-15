import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextDire]'
})
export class TextDireDirective {

  constructor(private eleRef: ElementRef) {
     eleRef.nativeElement.style.background = 'pink';
  }



}
