import { Summary } from "../summary/idex";
import { Container } from "./style";
import totalImg  from '../../assets/total.svg'
import incomeImg  from '../../assets/income.svg'
import { useContext } from "react";
import { TrasactionContext } from "../../contexts/context";

export function Dashboard(){
  const { transactions } = useContext(TrasactionContext);

  const totalEntradas = transactions.reduce((total, transaction) => {
     return total + transaction.amount
  }, 0);

  const saldoTotal = 0;

return(
  <Container> 
    <Summary title="Total Investido" image={incomeImg} value={totalEntradas} />
    <Summary title="Rendimento" image={incomeImg} value={totalEntradas} />
    <Summary className={true} title="Total" image={totalImg} value={totalEntradas} />
  </Container>
 );
}
