import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Answer } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly _answersSource = new BehaviorSubject<Answer[]>([]);

  // Exposed observable (read-only).
  readonly answers$ = this._answersSource.asObservable();

  constructor() {}

  // Get last value without subscribing to the answers$ observable (synchronously).
  getAnswers(): Answer[] {
    return this._answersSource.getValue();
  }

  private _setAnswers(answers: Answer[]): void {
    this._answersSource.next(answers);
  }

  addAnswer(answer: Answer): void {
    const answers = [...this.getAnswers(), answer];
    this._setAnswers(answers);
  }

  removeAnswer(answer: Answer): void {
    const answers = this.getAnswers().filter(p => p.id !== answer.id);
    this._setAnswers(answers);
  }

  clearAnswers(): void {
    this._setAnswers([]);
  }
}
