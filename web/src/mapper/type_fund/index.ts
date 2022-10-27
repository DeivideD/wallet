import { VO } from "../../lib/vo";
import { TypeFund } from "../../model/type_fund";
import { ToInteger, toString } from "../../lib/types";

export function  TypeFoundToDTO(data: TypeFund ){
  return{ 
    id: data.id,
    name: data.name,
    initials: data.initials,
  }
}


export function  TypeFoundToEntity(data: VO): TypeFund{
  return{ 
    id: ToInteger(data.id),
    name: toString(data.name),
    initials: toString(data.initials),
  }
}