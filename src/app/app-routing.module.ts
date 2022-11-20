import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeCategoriesEditComponent } from './income-categories-edit/income-categories-edit.component';
import { IncomeCategoriesComponent } from './income-categories/income-categories.component';
import { IncomeEditComponent } from './income-edit/income-edit.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeComponent } from './income/income.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import {ExpenseComponent} from "./expense/expense.component";
import {EditExpenseComponent} from "./edit-expense/edit-expense.component";
import {AddExpenseCategoriesComponent} from "./add-expense-categories/add-expense-categories.component";
import {ExpenseCategoriesComponent} from "./expense-categories/expense-categories.component";
import {AddExpenseComponent} from "./add-expense/add-expense.component";
import {BalancesComponent} from "./balances/balances.component";
import {BalancesMonthComponent} from "./balances-month/balances-month.component";
import {BalancesYearComponent} from "./balances-year/balances-year.component";

const routes: Routes = [
  {path: "register",component:RegisterComponent},
  {path: "login",component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: '', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' }, //jika gaada path langsung mengarah ke dashboard
  {path: "income",component:IncomeComponent},
  {path: "income-edit/:id",component:IncomeEditComponent},
  {path: "income-list",component:IncomeListComponent},
  {path: "income-categories",component:IncomeCategoriesComponent},
  {path: "income-categories-edit/:id",component:IncomeCategoriesEditComponent},
  {path: 'expense', component: ExpenseComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'editexpense', component: EditExpenseComponent},
  {path: 'expense-categories', component: ExpenseCategoriesComponent},
  {path: 'addexpense-categories', component: AddExpenseCategoriesComponent},


  {path: 'balances', component: BalancesComponent},
  {path: 'balances-month', component: BalancesMonthComponent},
  {path: 'balances-year', component: BalancesYearComponent},
  {path: "user-settings/:id",component:UserSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
