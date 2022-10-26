import { MonetaryFund } from "../../model/monetary_fund";
import { api } from "../api";

export async function monetaryFundService(): Promise<MonetaryFund[]> {
  return await api.get("monetary_funds").then(response =>  response.data.map((data: any) => ({...data, tipyFund: data.tipy_fund })));
}
