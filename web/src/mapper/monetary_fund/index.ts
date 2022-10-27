import { VO } from "../../lib/vo";
import { MonetaryFund } from "../../model/monetary_fund";
import { ToInteger, toString, toVO, toDecimal } from "../../lib/types";
import { TypeFoundToEntity } from "../type_fund";

export function MonetaryFoundToDTO(data: MonetaryFund) {
  return {
    id: data.id,
    name: data.name,
    type_fund_id: data.typeFund?.id,
    category: data.category,
  }
}

export function MonetaryFoundToEntity(data: VO): MonetaryFund {
  return {
    id: ToInteger(data.id),
    name: toString(data.name),
    quantity: ToInteger(data.quantity),
    entrancePrice: toDecimal(data.entrance_price),
    category: toString(data.category),
    typeFund: TypeFoundToEntity(toVO(data.type_fund))
  }
}

export function MonetaryFoundToEntityResume(data: VO): MonetaryFund {
  return {
    id: ToInteger(data.id),
    name: toString(data.name),
    category: toString(data.category),
    quantity: ToInteger(data.quantity),
    entrancePrice: toDecimal(data.entrance_price),
  }
}


