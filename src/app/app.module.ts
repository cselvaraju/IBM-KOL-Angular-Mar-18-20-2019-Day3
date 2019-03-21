import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActorlistService } from './services/actorlist.service';
import { ObservableService } from './services/observable.service';

import { ActorlistComponent } from '../app/components/actorlist/actorlist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';
import { ObservableComponent } from './components/observable/observable.component';
import { PostdemoComponent } from './components/postdemo/postdemo.component';
import { HomeComponent } from './components/home/home.component';
import { Friendly404Component } from './components/friendly404/friendly404.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    ParentComponent,
    ChildComponent,
    PipedemoComponent,
    ReversetextPipe,
    PiglatinPipe,
    ObservableComponent,
    PostdemoComponent,
    HomeComponent,
    Friendly404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ActorlistService,
    ObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
