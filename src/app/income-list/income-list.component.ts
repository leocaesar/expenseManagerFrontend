import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeComponent } from '../income/income.component';
import { Income } from '../model/income'

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent {
  newItem = "TESTING FREELANCE";

  @Input() income!: Income;
  @Output() addIncomeEvent = new EventEmitter<Income>();
  addNewIncome(income: Income) {
    this.addIncomeEvent.emit(income);
  }
  constructor(private incomes: IncomeComponent, private router: Router) { }
  ngOnInit(): void { }

  sendDelete(id: number): void {
    this.incomes.onDelete(id);
  }

  sendEdit(id: number): void {
    this.router.navigateByUrl("/income-edit/"+id)
  }


}
