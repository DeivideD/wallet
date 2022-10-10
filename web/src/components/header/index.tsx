import logoImg from "../../assets/logo.svg"
import { Menu } from "../menu";
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