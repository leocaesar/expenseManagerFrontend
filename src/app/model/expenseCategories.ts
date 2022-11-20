export interface ExpenseCategories {
  id:bigint;
  name: string;
}


export class ExpenseCategoriesModel{
  constructor(
    public name: string,
  ) {
  }
}
