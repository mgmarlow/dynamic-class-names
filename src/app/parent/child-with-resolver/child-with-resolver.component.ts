import { ParentLayout } from '../parent.component';
import { Component, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChildLayoutResolver]'
})
export class ChildLayoutResolverDirective {
  layoutClass: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  @Input('appChildLayoutResolver') set className(parentLayout: ParentLayout) {
    if (this.layoutClass) {
      this.renderer.removeClass(this.elementRef.nativeElement, this.layoutClass);
    }

    switch (parentLayout) {
      case ParentLayout.Layout01:
        this.layoutClass = 'red';
        break;
      case ParentLayout.Layout02:
        this.layoutClass = 'green';
        break;
      case ParentLayout.Layout03:
        this.layoutClass = 'blue';
        break;
    }

    this.renderer.addClass(this.elementRef.nativeElement, this.layoutClass);
  }
}


@Component({
  selector: 'app-child-with-resolver',
  templateUrl: './child-with-resolver.component.html'
})
export class ChildWithResolverComponent { }
