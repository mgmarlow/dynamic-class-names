import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildWithResolverComponent, ChildLayoutResolverDirective } from './parent/child-with-resolver/child-with-resolver.component';
import { ChildBasicComponent } from './parent/child-basic/child-basic.component';
import { ChildWithHostbindingComponent } from './parent/child-with-hostbinding/child-with-hostbinding.component';
import { ChildWithHostbindingsAndChildComponent } from './parent/child-with-hostbindings-and-child/child-with-hostbindings-and-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildWithResolverComponent,
    ChildLayoutResolverDirective,
    ChildBasicComponent,
    ChildWithHostbindingComponent,
    ChildWithHostbindingsAndChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
