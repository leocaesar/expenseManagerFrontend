import {Timestamp} from "rxjs";

export interface Balances {
  id:number;
  date: Date;
  cr_Db: string;
  new_Amount: string;
  balances:number;
  name:string;
  description:string;
}
