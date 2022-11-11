import { toVO } from "../../lib/types";
import { VO } from "../../lib/vo";
import { MonetaryFoundToDTO, MonetaryFoundToEntity } from "../../mapper/monetary_fund/mapper-monetary-fund";
import { MonetaryFund } from "../../model/monetary-fund";
import { api } from "../api";

export async function getMonetaryFund(): Promise<MonetaryFund[]> {
  return await api.get<VO[]>("monetary_funds").then(response => response.data.map((data) => (MonetaryFoundToEntity(data))));
}

export async function getMonetaryFundByTypeFund(type: string): Promise<MonetaryFund[]> {
  return await api.get<VO[]>(`monetary_funds/type/${type}`).then(response => response.data.map((data) => (MonetaryFoundToEntity(data))));
}

export function saveMonetaryFund(monetaryFund: MonetaryFund): Promise<MonetaryFund> {
  return api.post<string, VO>('monetary_funds', MonetaryFoundToDTO(monetaryFund)).then((response) =>MonetaryFoundToEntity(toVO(response.data)));
}
