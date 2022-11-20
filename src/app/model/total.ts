export interface Total {
    id: number;
    amount: number;
}

export class TotalModel {
    constructor(
        public amount : number
    ){}
}
