import { Transaction } from "../../model/transaction";
import { api } from "../api";

export function transactionService(): Promise<Transaction[]> {
  return api.get("transactions").then(resp =>  resp.data.map((data: any) => ({...data, monetaryFund: data.monetary_fund })));
}