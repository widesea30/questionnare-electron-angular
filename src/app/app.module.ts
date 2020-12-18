import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { HomeComponent } from './home/home.component';
import { FinalComponent } from './final/final.component';
import { AnsItemComponent } from './components/ans-item/ans-item.component';

import { StoreService } from './service/store.service';

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component,
    HomeComponent,
    FinalComponent,
    AnsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
