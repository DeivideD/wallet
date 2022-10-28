import { Yeld } from "../../model/yeld";
import { api } from "../api";

export function yeldService(): Promise<Yeld[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get("yelds").then(resp => resp.data.map((data: any) => ({...data, monetaryFund: data.monetary_fund })));
}