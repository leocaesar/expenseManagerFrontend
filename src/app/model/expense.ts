import {Timestamp} from "rxjs";
import {ExpenseCategories} from "./expenseCategories";

export interface Expense {
  id:number;
  date: Timestamp<any>;
  description: string;
  amount: number;
  expenseCategories:ExpenseCategories;
}

export class ExpenseModel{
  constructor(
    public id: number,
    public description: string,
    public amount: number,
    public expenseCategories:ExpenseCategories
  ) {
  }
}
