import { Component, OnInit } from '@angular/core';
import { CatagoriesDataService } from '../service/catagories-data.service';
@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  value: string = ""
  records: Array<[]> = []

  constructor(private dataService : CatagoriesDataService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(result => {
      let resp = JSON.parse(JSON.stringify(result))
      this.records = resp.categories
    })
  }

  // filter() {
  //   if(this.value === "") console.log('aaa')
  //   else this.records.filter(res => res == this.value);
  //   console.log(this.value)
  // }
}
