import { Route, Routes } from "react-router-dom";
import { FinancialAssets } from "../pages/financial-assets/financial-assets";
import { Home } from "../pages/home/home";
import { Transactions } from "../pages/transactions/transactions";
import { Yelds } from "../pages/yeld/yelds";


export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/financial-assets" element={<FinancialAssets />} />
        <Route path="/rendimentos" element={<Yelds />} />
      </Routes>
    </>
  );
}