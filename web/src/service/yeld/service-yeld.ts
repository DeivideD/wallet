import { VO } from "../../lib/vo";
import { YeldToEntity } from "../../mapper/yeld/mapper-yeld";
import { Yeld } from "../../model/yeld";
import { api } from "../api";

export function getYelds(): Promise<Yeld[]> {
  return api.get<VO[]>("yelds").then(resp => resp.data.map((data) => (YeldToEntity(data))));
}


// export function saveYeld(yeld: Yeld): Promise<Yeld> {
//   return api.post<string, VO>('transactions', TrasactiontoDTO(transaction)).then((response) =>EntityToTrasaction(toVO(response.data)));
// }