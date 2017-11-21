import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildWithResolverComponent, ChildLayoutResolverDirective } from './parent/child-with-resolver/child-with-resolver.component';
import { ChildBasicComponent } from './parent/child-basic/child-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildWithResolverComponent,
    ChildLayoutResolverDirective,
    ChildBasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
