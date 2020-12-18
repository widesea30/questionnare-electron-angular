import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ans-item',
  templateUrl: './ans-item.component.html',
  styleUrls: ['./ans-item.component.css']
})
export class AnsItemComponent implements OnInit {

  @Input() icon_name: string;
  @Input() answer_text: string;

  constructor() { }

  ngOnInit() {
  }

}
