import {  TypeFund } from "./type-fund"

export interface MonetaryFund {
  id?: number;
  name: string;
  quantity: number;
  entrancePrice: number;
  typeFund?: TypeFund;
  category?: string;
}
