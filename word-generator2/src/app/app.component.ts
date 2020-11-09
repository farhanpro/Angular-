import { Component } from '@angular/core';
import arrayWords from '../utils/words';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'word-generator2';
  words = ''
  limit = 100;
  handelSlideChange(newlimit : number){
    this.limit = newlimit;

  }
  generate(){
    this.words = arrayWords.slice(0,this.limit).join(' ');
  }
}
