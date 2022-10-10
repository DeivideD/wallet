import {  TypeFund } from "./type_fund"

export interface MonetaryFund {
  id?: number;
  name: string;
  typeFund?: TypeFund;
  category?: string;
}
