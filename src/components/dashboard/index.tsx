import { Summary } from "../summary/idex";
import { Container } from "./style";
import totalImg  from '../../assets/total.svg'
import incomeImg  from '../../assets/income.svg'
import outcomeImg  from '../../assets/outcome.svg'
import { useContext } from "react";
import { TrasactionContext } from "../../contexts/context";

export function Dashboard(){
  const { transactions } = useContext(TrasactionContext);

  const totalEntradas = transactions.reduce((total, transaction) => {
    if (transaction.type === 'deposit'){
      return total + transaction.amount
    }
    return total;
  }, 0);

  const totalSaidas = transactions.reduce((total, transaction) => {
    if (transaction.type === 'exit'){
      return total + transaction.amount
    }
    return total;
  }, 0);

  const saldoTotal = totalEntradas - totalSaidas

return(
  <Container> 
    <Summary title="Total Investido" image={incomeImg} value={totalEntradas} />
    <Summary title="Rendimento" image={incomeImg} value={totalSaidas} />
    <Summary className={true} title="Total" image={totalImg} value={saldoTotal} />
  </Container>
 );
}
