import { Component, OnInit } from '@angular/core';
import {Balances} from "../model/balances";
import {BalancesService} from "../service/balances.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {BalancesMonth} from "../model/balancesMonth";

@Component({
  selector: 'app-balances.ts-month',
  templateUrl: './balances-month.component.html',
  styleUrls: ['./balances-month.component.css']
})
export class BalancesMonthComponent implements OnInit {

  listBalancesMonth:BalancesMonth[]=[];

  constructor(private balanceService:BalancesService, private router:ActivatedRoute, private route:Router, private location:Location) { }

  ngOnInit(): void {
    console.log("getexpense")
    this.getBalancesMonth();
  }

  getBalancesMonth(): void {
    this.balanceService.getBalancesMonth()
      .subscribe(listExpense => this.listBalancesMonth = listExpense);
  }

}
