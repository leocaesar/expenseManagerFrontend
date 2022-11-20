import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseCategoriesComponent } from './expense-categories/expense-categories.component';
import { BalancesComponent } from './balances/balances.component';
import { IncomeComponent } from './income/income.component';
import { IncomeCategoriesComponent } from './income-categories/income-categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { IncomeCategoriesListComponent } from './income-categories-list/income-categories-list.component';
import { IncomeCategoriesEditComponent } from './income-categories-edit/income-categories-edit.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeEditComponent } from './income-edit/income-edit.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    ExpenseCategoriesComponent,
    BalancesComponent,
    IncomeComponent,
    IncomeCategoriesComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UserSettingsComponent,
    IncomeCategoriesEditComponent,
    IncomeListComponent,
    IncomeEditComponent,
    IncomeCategoriesListComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
