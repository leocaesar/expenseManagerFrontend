import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseCategoriesComponent } from './expense-categories/expense-categories.component';
import { BalancesComponent } from './balances/balances.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { AddExpenseCategoriesComponent } from './add-expense-categories/add-expense-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    ExpenseCategoriesComponent,
    BalancesComponent,
    AddExpenseComponent,
    EditExpenseComponent,
    AddExpenseCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
