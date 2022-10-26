import { Link } from "react-router-dom";
import { Container } from "./style";

export function Menu() {
  return (
    <Container>
      <Link to="/home"><i className="fa fa-home"></i>home</Link>
      <Link to="/transactions"><i className="fa fa-home"></i>transaction</Link>
      <Link to="/financial-assets"><i className="fa fa-home"></i>ativos</Link>
      <Link to="/rendimentos"><i className="fa fa-home"></i>rendimentos</Link>
    </Container>
  );
}