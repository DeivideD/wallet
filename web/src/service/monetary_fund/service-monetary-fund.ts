import { MonetaryFoundToEntity } from "../../mapper/monetary_fund/mapper-monetary-fund";
import { MonetaryFund } from "../../model/monetary-fund";
import { api } from "../api";

export async function getMonetaryFund(): Promise<MonetaryFund[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return await api.get("monetary_funds").then(response => response.data.map((data: any) => (MonetaryFoundToEntity(data))));
}

export async function getMonetaryFundByTypeFund(type: string): Promise<MonetaryFund[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return await api.get(`monetary_funds/type/${type}`).then(response => response.data.map((data: any) => (MonetaryFoundToEntity(data))));
}