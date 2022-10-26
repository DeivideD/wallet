import { useContext } from "react";
import { TransactionTable } from "../../components/table";
import { PageContext } from "../../contexts/page-context";
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