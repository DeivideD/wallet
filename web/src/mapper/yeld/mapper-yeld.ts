/* eslint-disable camelcase */
import { VO } from "../../lib/vo";
import { ToInteger, toDecimal, toVO, toDate } from "../../lib/types";
import { Yeld } from "../../model/yeld";
import { MonetaryFoundToEntity } from "../monetary_fund/mapper-monetary-fund";

export function YeldToDTO(data: Yeld ){
  return{ 
    id: data.id,
    total: data.total,
    monetary_fund: data.monetaryFund.id,
  }
}


export function YeldToEntity(data: VO): Yeld{
  return{ 
    id: ToInteger(data.id),
    total: toDecimal(data.total),
    createdAt: toDate(data.created_at),
    monetaryFund: MonetaryFoundToEntity(toVO(data.monetary_fund)),
  }
}