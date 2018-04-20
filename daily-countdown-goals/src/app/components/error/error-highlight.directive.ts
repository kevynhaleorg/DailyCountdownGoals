import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appErrorHighlight]'
})
export class ErrorHighlightDirective {

  @Input()
  set appErrorHighlight(appErrorHighlight: boolean) {
    if (appErrorHighlight) {
      this.renderer.setStyle(this.el.nativeElement, "border", "1px solid red")
    }
    else {
      this.renderer.setStyle(this.el.nativeElement, "border", "inherit")
    }
  }

  constructor(public el: ElementRef, public renderer: Renderer2) {}


}
