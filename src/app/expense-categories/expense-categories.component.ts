import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Expense} from "../model/expense";
import {ExpenseService} from "../service/expense.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ExpenseCategoriesService} from "../service/expense-categories.service";
import {ExpenseCategories, ExpenseCategoriesModel} from "../model/expenseCategories";
import {IncomeCategories} from "../model/incomeCategories";
import {IncomeCategoriesComponent} from "../income-categories/income-categories.component";

@Component({
  selector: 'app-expense-categories',
  templateUrl: './expense-categories.component.html',
  styleUrls: ['./expense-categories.component.css']
})
export class ExpenseCategoriesComponent implements OnInit {

  searchName: string = "";
  expenseCategories: ExpenseCategories[] = [];
  title: string = "ExpenseCategories"
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelExpenseCategories = new ExpenseCategoriesModel('')
  submitted = false;

  constructor(private expenseCategoriesService: ExpenseCategoriesService, private location: Location) { }

  ngOnInit(): void {
    this.getExpenseCategories()
  }

  onSubmit() {
    this.submitted = true;
    this.addIncomeCategory()
  }

  onDelete(id: bigint) {
    console.log(id);
    this.expenseCategoriesService.deleteExpenseCategories(id).subscribe((response) => {
      this.getExpenseCategories();
    });
  }

  getExpenseCategories(): void {
    this.expenseCategoriesService.getExpenseCategories().subscribe(users => this.expenseCategories = users);
  }

  // validateNo(e: any): boolean {
  //   const charCode = e.which ? e.which : e.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false
  //   }
  //   return true
  // }

  addIncomeCategory(name: string = this.modelExpenseCategories.name): void {
    name = name.trim();
    if (!name) { return }
    this.expenseCategoriesService.addExpenseCategories({ name } as ExpenseCategories)
      .subscribe(user => {
        this.expenseCategories.push(user)
      })
  }



}
