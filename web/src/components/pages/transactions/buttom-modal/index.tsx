import { useState } from "react";
import { ModalTrasaction } from "../../../modal";

import { Content } from "./style";

export function ButonModalFooter(){
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <Content>
      <button onClick={() => setIsOpen(true)}> Nova transação</button>
      <ModalTrasaction modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </Content>
  );
}