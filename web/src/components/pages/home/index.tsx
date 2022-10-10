import { useEffect } from "react";
import { typeFundService } from "../../../service/type_found";
import { Dashboard } from "../../dashboard";
import { TransactionTable } from "../../table";
import { Container } from "./style";



export function Home(){


  useEffect(() => {
   console.log(typeFundService());
  }, []);

  return(
    <Container>
      <Dashboard />
      <TransactionTable />
    </Container>
  );
}