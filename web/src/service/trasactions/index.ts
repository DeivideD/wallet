import { toDecimal, ToInteger, toString } from "../../lib/types";
import { VO } from "../../lib/vo";
import { MonetaryFund } from "../../model/monetary_fund";
import { Transaction } from "../../model/transaction";
import { api } from "../api";

export async function transactionService(): Promise<Transaction[]> {
  const data = await api.get("transactions").then(response => response.data);
  return getTransaction(data);
}

function getTransaction(monetaryFund: Array<VO>): Transaction[] {
  return monetaryFund.map(data => transform(data));
}

function transform(data: VO): Transaction {
  return ({
    id: ToInteger(data.id),
    price: toDecimal(data.price),
    quantity: ToInteger(data.quantity),
    monetaryFund: getManetaryFund(data.monetary_fund as VO)
  });
}


function getManetaryFund(data: VO): MonetaryFund {
  return {
    id: ToInteger(data.id),
    name: toString(data.name),
    category: toString(data.category)
  }
}


