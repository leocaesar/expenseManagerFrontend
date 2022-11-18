import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Income, IncomeModel } from '../model/income';
import { IncomeService } from '../service/income.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-income-edit',
  templateUrl: './income-edit.component.html',
  styleUrls: ['./income-edit.component.css']
})
export class IncomeEditComponent implements OnInit {

  incomes: Income = {
    id: 0,
    date: "",
    description:"",
    amount:0,
    category_income:0
  };
  income2: Income[] = [];
  title: string = "Edit INCOME"
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelIncome = new IncomeModel('','',0,0)
  submitted = false;

  constructor(private incomeService: IncomeService, private location: Location,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    //console.log(this.route?.snapshot.params['id'])
    this.incomeService.getIncome(this.route?.snapshot.params['id']).subscribe(
      (result) => {
        this.incomes = result
        console.log(this.incomes)
      }
    )
    this.getIncomes2()
  }

  onSubmit() {
    this.submitted = true;
    this.updateIncomes()
  }
  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }
  updateIncomes(): void {
    // console.log(this.freelancer)
    this.incomeService.editIncomesService(this.incomes.id,this.incomes)
      .subscribe(incomeCategories => {
        alert("SUKSES")
      })
  }
  getIncomes2(): void {
    this.incomeService.getIncomes().subscribe(incomes => this.income2 = incomes);
  }

}
