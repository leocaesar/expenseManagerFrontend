export interface ExpenseCategories {
  id:number;
  name: string;
}


export class ExpenseCategories{
  constructor(
    public id: number,
    public name: string,
  ) {
  }
}
