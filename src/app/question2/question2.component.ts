import { Component, OnInit } from '@angular/core';
import { CatagoriesDataService } from '../service/catagories-data.service';
@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  value: string = ""
  mock: string[] = []
  records: string[] = []

  constructor(private dataService : CatagoriesDataService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(result => {
      let resp = JSON.parse(JSON.stringify(result))
      this.records = resp.categories
      this.mock = this.records
    })
  }

  filter() {
    var pattern = this.value;
    if(pattern == "") this.records = this.mock;
    this.records = this.records.filter(str => str.includes(pattern));
  }
}
