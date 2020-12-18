import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  question = 'What would you like to do?';
  answers = ['Learn more about us', 'Search the catalog', 'Sign up for our newsletter'];

  constructor(private router: Router, private store: StoreService) { }

  ngOnInit() {
  }

  answered(ans_idx) {
    this.store.addAnswer({id: 0, question: this.question, answer: this.answers[ans_idx]});
    this.router.navigate(['question2']);
  }
}
