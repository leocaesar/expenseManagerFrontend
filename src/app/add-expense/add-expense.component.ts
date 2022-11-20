import { Component, OnInit } from '@angular/core';
import {ExpenseService} from "../service/expense.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Expense, ExpenseModel} from "../model/expense";
import {ExpenseCategories, ExpenseCategoriesModel} from "../model/expenseCategories";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  submitted = false;
  listExpense:Expense[]=[];
  expenseModel = new ExpenseModel(0, "", 0, 1)

  constructor(private expenseService: ExpenseService, private router: ActivatedRoute, private route: Router, private location: Location) { }

  ngOnInit(): void {
    this.submitted = false;
  }
  //
  // onSubmit() {
  //   this.submitted = true;
  //   this.addExpense()
  // }
  //
  // addExpense(
  //   description: string = this.expenseModel.description,
  //   amount: number = this.expenseModel.amount,
  //   expenseCategories: ExpenseCategories = this.expenseModel.expenseCategories
  // ): void {
  //   let id: number = this.listExpense.length + 1;
  //   this.expenseService.addExpense({description,amount,expenseCategories} as Expense)
  //     .subscribe(a => {
  //       this.listExpense.push(a)
  //     })
  // }

}
