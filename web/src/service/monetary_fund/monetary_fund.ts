import { ToInteger, toString } from "../../lib/types";
import { VO } from "../../lib/vo";
import { MonetaryFund } from "../../model/monetary_fund";
import { api } from "../api";

export async function monetaryFundService(): Promise<MonetaryFund[]> {
  const data = await api.get("monetary_funds").then(response => response.data);
  return getMonetaryFund(data);
}

function getMonetaryFund(monetaryFund: Array<VO>): MonetaryFund[] {
  return monetaryFund.map(data => transform(data));
}

function transform(data: VO): MonetaryFund {
  return ({
    id: ToInteger(data.id),
    name: toString(data.name),
    category: toString(data.category),
    typeFund: getTypeFound(data.type_fund as VO)
  });
}


function getTypeFound(data: VO) {
  return {
    id: ToInteger(data.id),
    name: toString(data.name),
    initials: toString(data.initials)
  }
}
