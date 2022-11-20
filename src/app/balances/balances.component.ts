import { Component, OnInit } from '@angular/core';
import {Expense} from "../model/expense";
import {ExpenseService} from "../service/expense.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {BalancesService} from "../service/balances.service";
import {Balances} from "../model/balances";

@Component({
  selector: 'app-balances.ts',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {

  listBalances:Balances[]=[];

  constructor(private balanceService:BalancesService, private router:ActivatedRoute, private route:Router, private location:Location) { }

  ngOnInit(): void {
    console.log("getexpense")
    this.getBalances();
  }

  getBalances(): void {
    this.balanceService.getBalances()
      .subscribe(listExpense => this.listBalances = listExpense);
  }

}
