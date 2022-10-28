import { VO } from "../../lib/vo";
import { TypeFoundToEntity } from "../../mapper/type_fund/mapper-type-fund";
import { TypeFund } from "../../model/type-fund";
import { api } from "../api";

export async function typeFundService(): Promise<TypeFund[]> {
  return api.get<VO[]>("type_funds").then(resp => resp.data.map((data) => (TypeFoundToEntity(data))));
}
