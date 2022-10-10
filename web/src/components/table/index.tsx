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
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction =>

            <tr key={transaction.id}>
              <td>{transaction.price}</td>
              <td>{"12"}</td>
              <td style={{ color: '#33CC95' }}>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(1)}
              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(new Date()))}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}