import { Component, OnInit } from '@angular/core';
import { Total, TotalModel } from '../model/total';
import { TotalService } from '../service/total.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Max } from '../model/max';
import { MaxService } from '../service/max.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchName: string = "";
  total: Total[] = [];
  total2: Total[] = [];
  max: Max[] = [];
  max2: Max[] = [];
  //total : any;
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelTotal = new TotalModel(0)
  submitted = false;

  constructor(private totalService: TotalService, private maxService: MaxService, private location: Location, private http: HttpClient) { }

  ngOnInit(): void {
    this.getTotalIncome()
    this.getTotalExpense()
    this.getMaxIncome()
    this.getMaxExpense()
  }
  getTotalIncome(): void {
    this.totalService.getTotalIncome().subscribe(totals => this.total = totals);
  }
  getTotalExpense(): void {
    this.totalService.getTotalExpense().subscribe(totals => this.total2 = totals);
  }
  getMaxIncome(): void {
    this.maxService.getMaxIncome().subscribe(max => this.max = max);
  }
  getMaxExpense(): void {
    this.maxService.getMaxExpense().subscribe(max => this.max2 = max);
  }
}
