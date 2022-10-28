import { Summary } from "../summary/summary";
import { Container } from "./style";
import totalImg from '../../assets/total.svg'
import incomeImg from '../../assets/income.svg'
import { useContext } from "react";
import { TrasactionContext } from "../../contexts/transaction_context/transaction";
import { YeldContext } from "../../contexts/yeld_context/yeld";

export function Dashboard() {
  const { transactions } = useContext(TrasactionContext);
  const { yelds } = useContext(YeldContext);

  const totalEntradas = transactions.reduce((total, transaction) => {
    return total + (transaction.price * transaction.quantity);
  }, 0);

  const totalYeld = yelds.reduce((total, yeld) => {
    return (1 * yeld.total) + total;
  }, 0);

  const total = totalEntradas + totalYeld


  return (
    <Container>
      <Summary title="Total Investido" image={incomeImg} value={totalEntradas} />
      <Summary title="Rendimento" image={incomeImg} value={totalYeld} />
      <Summary className={true} title="Total" image={totalImg} value={total} />
    </Container>
  );
}
