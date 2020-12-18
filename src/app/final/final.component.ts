import { Component, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';
import { writeFile } from 'fs';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private store: StoreService) { }

  ngOnInit() {
    console.log(this.store.getAnswers());
    writeFile('a.txt', 'aaaa', function(err) {
      console.log(err);
    });
  }

}
