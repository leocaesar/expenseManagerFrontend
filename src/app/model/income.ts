export interface Income {
    id: number;
    date: string;
    description: string;
    amount:number;
    category_income:number;
}

export class IncomeModel {
    constructor(
        public date: string,
        public description: string,
        public amount:number,
        public category_income:number
    ){}
}
