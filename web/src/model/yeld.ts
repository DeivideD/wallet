import { MonetaryFund } from "./monetary-fund";

export interface Yeld {
  id?: number;
  monetaryFund: MonetaryFund;
  total: number;
  createdAt?: string;
}