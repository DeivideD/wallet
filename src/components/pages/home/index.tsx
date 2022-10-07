import { Dashboard } from "../../dashboard";
import { TransactionTable } from "../../table";
import { Container } from "./style";



export function Home(){
  return(
    <Container>
      <Dashboard />
      <TransactionTable />
    </Container>
  );
}