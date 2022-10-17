import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/home";
import { Transactions } from "../components/pages/transactions/transactions";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
}