import { useContext, useEffect } from "react";
import { PageContext } from "../../../contexts/page-context";
import { transactionService } from "../../../service/trasactions";
import { Dashboard } from "../../dashboard";
import { Container } from "./style";

export function Home(){
  const { page, setPage } = useContext(PageContext);

  useEffect(() => {
    setPage('home');
  }, [setPage]);

  return(
    <Container>
      <Dashboard />
    </Container>
  );
}
