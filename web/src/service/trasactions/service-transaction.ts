import { toVO } from "../../lib/types";
import { VO } from "../../lib/vo";
import { EntityToTrasaction, TrasactiontoDTO } from "../../mapper/transaction/mapper-transaction";
import { Transaction } from "../../model/transaction";
import { api } from "../api";

export function transactionService(): Promise<Transaction[]> {
  return api.get<VO[]>("transactions").then(resp => resp.data.map((data) => (EntityToTrasaction(data))));
}

export function saveTransaction(transaction: Transaction): Promise<Transaction> {
  return api.post<string, VO>('transactions', TrasactiontoDTO(transaction)).then((response) =>EntityToTrasaction(toVO(response.data)));
}

export function editTransaction(id: number, transaction: Transaction): Promise<Transaction> {
  return api.put(`transactions/${id}`, TrasactiontoDTO(transaction)).then((response) =>EntityToTrasaction(toVO(response.data)));
}