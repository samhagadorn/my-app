import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { StruDireComponent } from './stru-dire/stru-dire.component';
import { TextDireDirective } from './text-dire.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { WordCountPipe } from './word-count.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { RedactDirective } from './redact.directive';
import { NgStyleDirective } from './ng-style.directive';
import { OnMouseWheelDirective } from './on-mouse-wheel.directive';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { ServiceDemo2Component } from './service-demo2/service-demo2.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpClientComponent } from './http-client/http-client.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    StruDireComponent,
    TextDireDirective,
    PipeDemoComponent,
    WordCountPipe,
    HighlightDirective,
    RedactDirective,
    NgStyleDirective,
    OnMouseWheelDirective,
    OneWayComponent,
    TwoWayComponent,
    ServiceDemoComponent,
    ServiceDemo2Component,
    HttpClientComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
