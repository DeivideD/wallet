import { Yeld } from "../../model/yeld";
import { api } from "../api";

export function yeldService(): Promise<Yeld[]> {
  return api.get("yelds").then(resp =>  resp.data.map((data: any) => ({...data, monetaryFund: data.monetary_fund })));
}