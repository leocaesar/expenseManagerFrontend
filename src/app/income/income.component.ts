import { Component, OnInit } from '@angular/core';
import { Income, IncomeModel } from '../model/income';
import { IncomeService } from '../service/income.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  searchName: string = "";
  incomes: Income[] = [];
  title: string = "Incomes"
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelIncome = new IncomeModel('','',0,0)
  submitted = false;

  constructor(private incomeService: IncomeService, private location: Location) { }

  ngOnInit(): void {
    this.getIncomes()
  }

  onSubmit() {
    this.submitted = true;
    this.addIncome()
  }

  onDelete(id: number) {
    console.log(id);
    this.incomeService.deleteIncomesService(id).subscribe((response) => {
      this.getIncomes();
    });
  }

  getIncomes(): void {
    this.incomeService.getIncomes().subscribe(incomes => this.incomes = incomes);
  }

  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }

  addIncome(date: string = this.modelIncome.date,
    description: string = this.modelIncome.description,
    amount: number = this.modelIncome.amount,
    category_income: number = this.modelIncome.category_income): void {
    description = description.trim();
    if (!description) { return }
    this.incomeService.addIncomesService({ date,description,amount,category_income } as Income)
      .subscribe(income => {
        this.incomes.push(income)
        alert("SUKSES")
      })
  }

}
