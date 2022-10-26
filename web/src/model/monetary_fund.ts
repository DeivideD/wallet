import {  TypeFund } from "./type_fund"

export interface MonetaryFund {
  id?: number;
  name: string;
  quantity: number;
  entrancePrice: number;
  typeFund?: TypeFund;
  category?: string;
}
