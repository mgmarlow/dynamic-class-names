import { Input, HostBinding, Component, OnInit } from '@angular/core';
import { ParentLayout } from '../parent.component';

export enum ChildHostBindingLayout {
  Red,
  Green,
  Blue
}

abstract class LayoutInputComponent {
  layout: any;

  _parentLayout: any;
  @Input() set parentLayout(parent: any) {
    this._parentLayout = parent;
    this.layout = this.getLayoutFromParent(parent);
  }

  abstract getLayoutFromParent(parent: any): any;
}

@Component({
  selector: 'app-child-with-hostbindings-and-child',
  templateUrl: './child-with-hostbindings-and-child.component.html'
})
export class ChildWithHostbindingsAndChildComponent extends LayoutInputComponent {
  @HostBinding('class.red') get red () { return this._parentLayout === ParentLayout.Layout01; }
  @HostBinding('class.green') get green () { return this._parentLayout === ParentLayout.Layout02; }
  @HostBinding('class.blue') get blue () { return this._parentLayout === ParentLayout.Layout03; }

  getLayoutFromParent(parent: ParentLayout): ChildHostBindingLayout {
    switch (parent) {
      case ParentLayout.Layout01:
        this.layout  = ChildHostBindingLayout.Red;
        break;
      case ParentLayout.Layout02:
        this.layout  = ChildHostBindingLayout.Green;
        break;
      case ParentLayout.Layout03:
        this.layout  = ChildHostBindingLayout.Blue;
        break;
    }
    return this.layout;
  }
}

