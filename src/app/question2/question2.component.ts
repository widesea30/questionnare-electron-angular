import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  question = 'What do you prefer?';
  answers = ['Video', 'Phone', 'Chat'];

  constructor(private router: Router, private store: StoreService) { }

  ngOnInit() {
  }

  answered(ans_idx) {
    this.store.addAnswer({id: 1, question: this.question, answer: this.answers[ans_idx]});
    this.router.navigate(['final']);
  }
}
