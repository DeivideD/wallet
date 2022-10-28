import { MonetaryFund } from "./monetary-fund";

export interface Transaction {
  id?: number;
  price: number;
  monetaryFund?: MonetaryFund
  quantity: number;
};
