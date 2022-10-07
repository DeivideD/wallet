import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Transactions } from "../pages/transactions/transactions";
import { Container } from "./style";

export function Router() {
  return (
    <>
      <Container>
        <Link to="/home"><i className="fa fa-home"></i>Home</Link>
        <Link to="/transactions"><i className="fa fa-home"></i>Transactions</Link>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
}