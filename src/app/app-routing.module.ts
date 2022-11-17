import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpenseComponent} from "./expense/expense.component";
import {AddExpenseComponent} from "./add-expense/add-expense.component";
import {EditExpenseComponent} from "./edit-expense/edit-expense.component";
import {AddExpenseCategoriesComponent} from "./add-expense-categories/add-expense-categories.component";
import {ExpenseCategoriesComponent} from "./expense-categories/expense-categories.component";

const routes: Routes = [
  {path: 'expense', component: ExpenseComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'editexpense', component: EditExpenseComponent},
  {path: 'expense-categories', component: ExpenseCategoriesComponent},
  {path: 'addexpense-categories', component: AddExpenseCategoriesComponent},
  // {path: 'editexpense', component: EditExpenseComponent},
  {path: '', redirectTo: '/expense', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
