import {Timestamp} from "rxjs";
import {ExpenseCategories} from "./expenseCategories";

export interface Expense {
  id:number;
  date: Timestamp<any>;
  description: string;
  amount: number;
  expenseCategories:ExpenseCategories;
}

export class Expense{
  constructor(
    public id: number,
    public date: Timestamp<any>,
    public description: string,
    public amount: number,
    public expenseCategories:ExpenseCategories
  ) {
  }
}
