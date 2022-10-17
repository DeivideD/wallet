import { MonetaryFund } from "./monetary_fund";

export interface Yeld {
  id?: number;
  monetaryFund: MonetaryFund;
  total: number
}