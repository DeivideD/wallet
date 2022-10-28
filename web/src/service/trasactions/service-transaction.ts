import { EntityToTrasaction } from "../../mapper/transaction/mapper-transaction";
import { Transaction } from "../../model/transaction";
import { api } from "../api";

export function transactionService(): Promise<Transaction[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get("transactions").then(resp => resp.data.map((data: any) => (EntityToTrasaction(data))));
}