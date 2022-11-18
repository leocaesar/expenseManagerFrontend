import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeCategories, IncomeCategoriesModel } from '../model/incomeCategories';
import { IncomeCategoriesService } from '../service/income-categories.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-income-categories-edit',
  templateUrl: './income-categories-edit.component.html',
  styleUrls: ['./income-categories-edit.component.css']
})
export class IncomeCategoriesEditComponent implements OnInit {

  incomeCategories: IncomeCategories = {
    id: 0,
    name: ""
  };
  incomeCategories2: IncomeCategories[] = [];
  title: string = "Edit INCOME CATEGORIES"
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelIncomeCategories = new IncomeCategoriesModel('')
  submitted = false;

  constructor(private incomeCategoriesService: IncomeCategoriesService, private location: Location,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    //console.log(this.route?.snapshot.params['id'])
    this.incomeCategoriesService.getIncomeCategory(this.route?.snapshot.params['id']).subscribe(
      (result) => {
        this.incomeCategories = result
        console.log(this.incomeCategories)
      }
    )
    this.getIncomeCategories2()
  }

  onSubmit() {
    this.submitted = true;
    this.updateIncomeCategories()
  }
  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }
  updateIncomeCategories(): void {
    // console.log(this.freelancer)
    this.incomeCategoriesService.editIncomeCategoriesService(this.incomeCategories.id,this.incomeCategories)
      .subscribe(incomeCategories => {
        alert("SUKSES")
      })
  }
  getIncomeCategories2(): void {
    this.incomeCategoriesService.getIncomeCategories().subscribe(users => this.incomeCategories2 = users);
  }

}
