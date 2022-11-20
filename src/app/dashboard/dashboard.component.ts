import { Component, OnInit } from '@angular/core';
import { Total, TotalModel } from '../model/total';
import { TotalService } from '../service/total.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchName: string = "";
  //total: Total[] = [];
  totalData : any;
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelTotal = new TotalModel(0)
  submitted = false;

  constructor(private totalService: TotalService, private location: Location, private http: HttpClient) { }

  ngOnInit(): void {
    // this.getTotalIncome()
    let resp = this.http.get("http://localhost:8080/api/total_income");
    resp.subscribe((data)=>this.totalData=data);
  }
  // getTotalIncome(): void {
  //   this.totalService.getTotalIncome().subscribe(totals => this.total = totals);
  // }

}
