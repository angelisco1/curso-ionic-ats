import { Directive, HostBinding, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {

  @HostBinding('style.backgroundColor') backgroundC: string = '';
  @Input('appMarcar') color: string = 'yellowgreen'
  // @Input('appMarcar') obj: any = {};
  // @Input() otro: string = ''

  constructor(private elemRef: ElementRef) {
    // elemRef.nativeElement.style.color = 'blue';
    // elemRef.nativeElement.className = 'letraVerde';
    // elemRef.nativeElement.classList.add('letraVerde');
  }

  @HostListener('mouseenter') cambiaColor() {
    // this.backgroundC = this.obj.color;
    // console.log(this.obj.msg)
    this.backgroundC = this.color;
  }

  @HostListener('mouseleave') quitarColor() {
    this.backgroundC = 'white';
  }

}
