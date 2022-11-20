import { Component, OnInit } from '@angular/core';
import { Total, TotalModel } from '../model/total';
import { TotalService } from '../service/total.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchName: string = "";
  total: Total[] = [];
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelTotal = new TotalModel(0)
  submitted = false;

  constructor(private totalService: TotalService, private location: Location) { }

  ngOnInit(): void {
    this.getTotalIncome()
  }

  getTotalIncome(): void {
    this.totalService.getTotalIncome().subscribe(income => this.total = income);
  }

}
