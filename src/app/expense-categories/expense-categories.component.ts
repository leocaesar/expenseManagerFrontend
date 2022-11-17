import { Component, OnInit } from '@angular/core';
import {Expense} from "../model/expense";
import {ExpenseService} from "../service/expense.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ExpenseCategories} from "../model/expenseCategories";
import {ExpenseCategoriesService} from "../service/expense-categories.service";

@Component({
  selector: 'app-expense-categories',
  templateUrl: './expense-categories.component.html',
  styleUrls: ['./expense-categories.component.css']
})
export class ExpenseCategoriesComponent implements OnInit {

  listExpenseCategories:ExpenseCategories[]=[];

  constructor(private expenseService:ExpenseCategoriesService, private router:ActivatedRoute, private route:Router, private location:Location) { }

  ngOnInit(): void {
    console.log("getexpense")
    this.getExpenseCategories();
  }

  getExpenseCategories(): void {
    this.expenseService.getExpenseCategories()
      .subscribe(listExpenseCategories => this.listExpenseCategories = listExpenseCategories);
  }

  addExpenseCategories():void{
    console.log("addexpense")
    this.route.navigate(['/addexpense-categories'])
  }
}
