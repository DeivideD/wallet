import { VO } from "../../lib/vo";
import { TypeFund } from "../../model/type_fund";
import { toString } from "../../lib/types";

export function  TypeFoundToDTO(data: TypeFund ){
  return{ 
    name: data.name,
    initials: data.initials,
  }
}


export function  TypeFoundToEntity(data: VO): TypeFund{
  return{ 
    name: toString(data.name),
    initials: toString(data.initials),
  }
}