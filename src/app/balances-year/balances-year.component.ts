import { Component, OnInit } from '@angular/core';
import {BalancesMonth} from "../model/balancesMonth";
import {BalancesService} from "../service/balances.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {BalancesYear} from "../model/balancesYear";

@Component({
  selector: 'app-balances.ts-year',
  templateUrl: './balances-year.component.html',
  styleUrls: ['./balances-year.component.css']
})
export class BalancesYearComponent implements OnInit {

  listBalancesYear:BalancesYear[]=[];

  constructor(private balanceService:BalancesService, private router:ActivatedRoute, private route:Router, private location:Location) { }

  ngOnInit(): void {
    console.log("getexpense")
    this.getBalancesYear();
  }

  getBalancesYear(): void {
    this.balanceService.getBalancesYear()
      .subscribe(listExpense => this.listBalancesYear = listExpense);
  }
}
