import { MonetaryFund } from "./monetary_fund";

export interface Transaction {
  id?: number;
  price: number;
  monetaryFund?: MonetaryFund
  quantity: number;
};
