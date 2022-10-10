import { ToInteger, toString } from "../../lib/types";
import { VO } from "../../lib/vo";
import { TypeFund } from "../../model/type_fund";
import { api } from "../api";

export async function typeFundService(): Promise<TypeFund[]> {
  const data = await api.get("type_funds").then(response => response.data);
  return getTypeFund(data);
}

function getTypeFund (typeFund: Array<VO>): TypeFund[]{
  return typeFund.map(data => transform(data));
}

function transform(data: VO): TypeFund{
  return ({ 
    id: ToInteger(data.id),
    name: toString(data.name),
    initials: toString(data.initials)

  });
}
