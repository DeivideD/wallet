import { MonetaryFund } from "../../model/monetary_fund";
import { api } from "../api";

export async function getMonetaryFund(): Promise<MonetaryFund[]> {
  return await api.get("monetary_funds").then(response =>  response.data.map((data: any) => ({...data, tipyFund: data.tipy_fund })));
}

export async function getMonetaryFundByTypeFund(type: string): Promise<MonetaryFund[]> {
  return await api.get(`monetary_funds/type/${type}`).then(response =>  response.data.map((data: any) => ({...data, tipyFund: data.tipy_fund })));
}
