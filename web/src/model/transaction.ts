import { MonetaryFund } from "./monetary_fund";

export interface Transition {
  id?: number;
  price: number;
  monetaryFund: MonetaryFund
  category: string;
  quantity: number;
};
