import { Component, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private store: StoreService, private electronService: ElectronService) { }

  ngOnInit() {
    let answers = this.store.getAnswers();
    this.electronService.ipcRenderer.send('write-result', answers);
  }

}
