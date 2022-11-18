import { Component, OnInit } from '@angular/core';
import { IncomeCategories, IncomeCategoriesModel } from '../model/incomeCategories';
import { IncomeCategoriesService } from '../service/income-categories.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-income-categories',
  templateUrl: './income-categories.component.html',
  styleUrls: ['./income-categories.component.css']
})
export class IncomeCategoriesComponent implements OnInit {

  searchName: string = "";
  incomeCategories: IncomeCategories[] = [];
  title: string = "IncomeCategories"
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelIncomeCategories = new IncomeCategoriesModel('')
  submitted = false;

  constructor(private incomeCategoriesService: IncomeCategoriesService, private location: Location) { }

  ngOnInit(): void {
    this.getIncomeCategories()
  }

  onSubmit() {
    this.submitted = true;
    this.addIncomeCategory()
  }

  onDelete(id: number) {
    console.log(id);
    this.incomeCategoriesService.deleteIncomeCategoriesService(id).subscribe((response) => {
      this.getIncomeCategories();
    });
  }

  getIncomeCategories(): void {
    this.incomeCategoriesService.getIncomeCategories().subscribe(users => this.incomeCategories = users);
  }

  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }

  addIncomeCategory(name: string = this.modelIncomeCategories.name): void {
    name = name.trim();
    if (!name) { return }
    this.incomeCategoriesService.addIncomeCategoriesService({ name } as IncomeCategories)
      .subscribe(user => {
        this.incomeCategories.push(user)
      })
  }

}
