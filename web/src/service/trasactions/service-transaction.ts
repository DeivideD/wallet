import { VO } from "../../lib/vo";
import { EntityToTrasaction } from "../../mapper/transaction/mapper-transaction";
import { Transaction } from "../../model/transaction";
import { api } from "../api";

export function transactionService(): Promise<Transaction[]> {
  return api.get<VO[]>("transactions").then(resp => resp.data.map((data) => (EntityToTrasaction(data))));
}