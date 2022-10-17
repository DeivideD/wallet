import { useContext } from "react";
import { TrasactionContext } from "../../contexts/transaction-context";
import { Container } from "./style";

export function TransactionTable() {
  const { transactions } = useContext(TrasactionContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Fundo</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction =>

            <tr key={transaction.id}>
              <td>{transaction.monetaryFund?.name}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.price}</td>
              <td>{transaction.price * transaction.quantity}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}