import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighQuote]'
})
export class HighlighQuoteDirective {

  constructor(private elem:ElementRef) { }
  @HostListener("click") onClicks(){
    this.highlightQuote("teal")
  }

  private highlightQuote(action:string){
    this.elem.nativeElement.style.backgroundColor = action;
  }

}
