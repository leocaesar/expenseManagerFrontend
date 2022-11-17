export interface ExpenseCategories {
  id:number;
  name: string;
}


export class ExpenseCategoriesModel{
  constructor(
    public id: number,
    public name: string,
  ) {
  }
}
