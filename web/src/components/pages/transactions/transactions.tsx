import { useContext } from "react";
import { PageContext } from "../../../contexts/page-context";
import { TransactionTable } from "../../table";
import { ButonModalFooter } from "./buttom-modal";
import { Container } from "./style";


export function Transactions() {
  const { setPage } = useContext(PageContext);

  setPage("transaction")
  return (
    <Container>
      <h2>Trasações</h2>
      <TransactionTable />
      <ButonModalFooter />
    </Container>
  )
}