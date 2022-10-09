import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg"
import { Menu } from "../menu/menu";
import { ModalHome } from "../modal";
import { Container, Content } from "./style"


export function Header() {
 

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="money" />
        <Menu />
      </Content>
    </Container>
  )
}