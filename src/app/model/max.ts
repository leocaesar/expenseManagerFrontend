export interface Max {
    id: number;
    date:string;
    description:string;
    amount: number;
}

export class MaxModel {
    constructor(
        public date:string,
        public description:string,
        public amount : number
    ){}
}
