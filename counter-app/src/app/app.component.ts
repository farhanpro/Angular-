import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
  count : number  = 0;
  
  handelIncrease = () => {
    if(this.count >= 10){
      this.count = 10
    }
    else{
    this.count = this.count + 1;
    }
    }
  

  handelDecrease = () => {
    if(this.count<=0){
      this.count = 0 ;
    }
    else{
    this.count = this.count - 1;
    }
  }

  handelReset = () =>{
    this.count = this.count = 0;
  }
}


