import { useContext } from "react";
import { TrasactionContext } from "../../contexts/context";
import { Container } from "./style";

export function TransactionTable() {
  const { transactions } = useContext(TrasactionContext);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Fundo</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction =>

            <tr key={transaction.id}>
              <td>{transaction.price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}