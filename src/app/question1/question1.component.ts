import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
  cal : string = "p";
  value : number = 0;
  answer : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    if(this.value < 0 ) this.value = 1;
    if(this.cal === "p") 
    {
      let bool = true;
      for (let i = 2; i < this.value; i++) {
        if (this.value % i == 0) {
          bool = false;
            break;
        }
      }
      if (bool) this.answer = true;
       else this.answer = false
    }
    else 
    {
      let n1 = 0, n2 = 1, nextTerm;
      nextTerm = n1 + n2;
      while (nextTerm < this.value) {
          n1 = n2;
          n2 = nextTerm;
          nextTerm = n1 + n2;
      }
      if(nextTerm === this.value) this.answer = true;
      else this.answer = false
    }
  }
}
