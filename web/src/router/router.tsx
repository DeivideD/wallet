import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Transactions } from "../pages/transactions/transactions";
import { Yeld } from "../pages/yeld";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/rendimentos" element={<Yeld />} />
      </Routes>
    </>
  );
}