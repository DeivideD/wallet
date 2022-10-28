import { useContext } from "react";
import logoImg from "../../assets/logo.svg"
import { PageContext } from "../../contexts/page_context/page";
import { Menu } from "../menu/menu";
import { Container, Content } from "./style"


export function Header() {
  const { page } = useContext(PageContext);

  return (
    <Container>
      <Content title={page}>
        <img src={logoImg} alt="money" />
        <Menu />
      </Content>
    </Container>
  )
}