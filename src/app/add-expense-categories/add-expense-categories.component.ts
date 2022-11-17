import { Component, OnInit } from '@angular/core';
import {Expense, ExpenseModel} from "../model/expense";
import {ExpenseCategories, ExpenseCategoriesModel} from "../model/expenseCategories";
import {ExpenseService} from "../service/expense.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ExpenseCategoriesService} from "../service/expense-categories.service";

@Component({
  selector: 'app-add-expense-categories',
  templateUrl: './add-expense-categories.component.html',
  styleUrls: ['./add-expense-categories.component.css']
})
export class AddExpenseCategoriesComponent implements OnInit {

  submitted = false;
  listExpenseCategories:ExpenseCategories[]=[];
  expenseCategoriesModel = new ExpenseCategoriesModel(0, "")

  constructor(private expenseService: ExpenseCategoriesService, private router: ActivatedRoute, private route: Router, private location: Location) { }

  ngOnInit(): void {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.addExpenseCategories()
  }

  addExpenseCategories(
    name: string = this.expenseCategoriesModel.name,
  ): void {
    let id: number = this.listExpenseCategories.length + 1;
    this.expenseService.addExpenseCategories({name} as ExpenseCategories)
      .subscribe(a => {
        this.listExpenseCategories.push(a)
      })
    console.log("bla bla")
  }
}
