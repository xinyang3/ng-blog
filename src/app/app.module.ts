import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgContainerComponent } from './main-views/ng-blog/ng-container.cpmponent'

@NgModule({
  declarations: [
    AppComponent,
    NgContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
