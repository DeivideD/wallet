import { useState } from "react";
import { ModalHome } from "../modal";
import { Content } from "./style";

export function Footer(){
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <Content>
      <button onClick={() => setIsOpen(true)}> Nova transação</button>
      <ModalHome modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </Content>
  );
}