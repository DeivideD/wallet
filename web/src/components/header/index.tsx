import { useContext } from "react";
import logoImg from "../../assets/logo.svg"
import { PageContext } from "../../contexts/page-context";
import { Menu } from "../menu";
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