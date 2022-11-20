import {Timestamp} from "rxjs";
import {ExpenseCategories} from "./expenseCategories";

export interface Expense {
  id:number;
  date: Date;
  description: string;
  amount: number;
  category_expense:number;
}

export class ExpenseModel{
  constructor(
    public id: number,
    public description: string,
    public amount: number,
    public category_expense:number
  ) {
  }
}
