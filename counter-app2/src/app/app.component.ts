import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Counter App Version-2';
  count :number = 0;
  handelIncrease (){
    if(this.count >=  10){
      this.count = this.count;
    }
    else{
    this.count = this.count + 1;
  }
}
  handelDecrease(){
    if(this.count  < 1 ){
      this.count = this.count = 0;
    }
    else{
    this.count = this.count - 1;
  }}
  handelreset(){
    this.count = 0;
  }
}
