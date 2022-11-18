import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeCategoriesComponent } from '../income-categories/income-categories.component';
import { IncomeCategories } from '../model/incomeCategories'

@Component({
  selector: 'app-income-categories-list',
  templateUrl: './income-categories-list.component.html',
  styleUrls: ['./income-categories-list.component.css']
})
export class IncomeCategoriesListComponent {

  newItem = "TESTING FREELANCE";

  @Input() incomeCategory!: IncomeCategories;
  @Output() addFreelanceEvent = new EventEmitter<IncomeCategories>();
  addNewIncomeCategory(incomeCategory: IncomeCategories) {
    this.addFreelanceEvent.emit(incomeCategory);
  }
  constructor(private incomeCategories: IncomeCategoriesComponent, private router: Router) { }
  ngOnInit(): void { }

  sendDelete(id: number): void {
    this.incomeCategories.onDelete(id);
  }

  sendEdit(id: number): void {
    this.router.navigateByUrl("/income-categories-edit/"+id)
  }

}
