import { Component, OnInit } from '@angular/core';
import {ExpenseService} from "../service/expense.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Expense} from "../model/expense";
import {Location} from "@angular/common";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  listExpense:Expense[]=[];

  constructor(private expenseService:ExpenseService, private router:ActivatedRoute, private route:Router, private location:Location) { }

  ngOnInit(): void {
    console.log("getexpense")
    this.getExpense();
  }

  getExpense(): void {
    this.expenseService.getExpense()
      .subscribe(listExpense => this.listExpense = listExpense);
    console.log("getexpense")
  }

}
