/* eslint-disable camelcase */
import { toDate, toDecimal, ToInteger, toVO, toString } from "../../lib/types";
import { VO } from "../../lib/vo";
import { Transaction } from "../../model/transaction";
import { MonetaryFoundToEntity } from "../monetary_fund/mapper-monetary-fund";

export function TrasactiontoDTO(data: Transaction){
  return {
    monetary_fund_id: data.monetaryFund?.id, 
    quantity: data.quantity,
    transaction_type: data.transactionType,
    price: data.price,
  }
}


export function EntityToTrasaction(data: VO): Transaction{  
  return {
    id: ToInteger(data.id),
    monetaryFund: MonetaryFoundToEntity(toVO(data.monetary_fund)),
    quantity: toDecimal(data.quantity),
    price: toDecimal(data.price),
    transactionType: toString(data.transaction_type),
    createdAt: toDate(data.created_at),
  }
}