import { useEffect } from "react";
import { transactionService } from "../../../service/trasactions";
import { Dashboard } from "../../dashboard";
import { TransactionTable } from "../../table";
import { Container } from "./style";



export function Home(){


  useEffect(() => {
   console.log(transactionService());
  }, []);

  return(
    <Container>
      <Dashboard />
      <TransactionTable />
    </Container>
  );
}
