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

const routes: Routes = [
  {path: "register",component:RegisterComponent},
  {path: "login",component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //jika gaada path langsung mengarah ke dashboard
  {path: "income",component:IncomeComponent},
  {path: "income-edit/:id",component:IncomeEditComponent},
  {path: "income-list",component:IncomeListComponent},
  {path: "income-categories",component:IncomeCategoriesComponent},
  {path: "income-categories-edit/:id",component:IncomeCategoriesEditComponent},
  {path: "user-settings/:id",component:UserSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
