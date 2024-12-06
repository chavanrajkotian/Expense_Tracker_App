import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Constants } from './constants';

@Directive({
  selector: '[appMode]'
})
export class ModeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('appMode') set classNames(mode: string){
    if(mode === Constants.LIGHT){
      this.el.nativeElement.classList.remove(Constants.DARK);
      this.el.nativeElement.classList.add(mode);
      this.renderer.removeClass(document.body, 'dark-mode');
      this.renderer.addClass(document.body, 'light-mode');
    } else{
      this.el.nativeElement.classList.remove(Constants.LIGHT);
      this.el.nativeElement.classList.add(mode);
      this.renderer.removeClass(document.body, 'light-mode');
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }

}
