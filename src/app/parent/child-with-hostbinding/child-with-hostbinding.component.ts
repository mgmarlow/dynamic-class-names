import { Input, HostBinding, Component, OnInit } from '@angular/core';
import { ParentLayout } from '../parent.component';

@Component({
  selector: 'app-child-with-hostbinding',
  templateUrl: './child-with-hostbinding.component.html'
})
export class ChildWithHostbindingComponent {
  @Input() parentLayout: ParentLayout;

  @HostBinding('class.red') get red () { return this.parentLayout === ParentLayout.Layout01; }
  @HostBinding('class.green') get green () { return this.parentLayout === ParentLayout.Layout02; }
  @HostBinding('class.blue') get blue () { return this.parentLayout === ParentLayout.Layout03; }
}
