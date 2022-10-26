import { toDecimal, toVO } from "../../lib/types";
import { VO } from "../../lib/vo";
import { Transaction } from "../../model/transaction";
import { MonetaryFoundToEntityResume } from "../monetary_fund";

export function TrasactiontoDTO(data: Transaction){
  return {
    monetary_fund_id: data.monetaryFund?.id, 
    quantity: data.quantity,
    price: data.price,
  }
}


export function EntityToTrasaction(data: VO): Transaction{  
  return { 
    monetaryFund: MonetaryFoundToEntityResume(toVO(data.monetary_fund)),
    quantity: toDecimal(data.quantity),
    price: toDecimal(data.price),
  }
}