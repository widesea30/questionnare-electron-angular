import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'question1',
    component: Question1Component
  },
  {
    path: 'question2',
    component: Question2Component
  },
  {
    path: 'final',
    component: FinalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
