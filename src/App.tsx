import { Header } from './components/header'
import { GlobalStyle } from './assets/style/global';
import { createServer, Model } from 'miragejs';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/pages/home';
import { ContextTransactionProvider } from './contexts/context';
import { Router } from './components/router/router';
import { Footer } from './components/footer';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          fundo: 'BCFF11',
          type: 'FII',
          category: 'Renda Variavel',
          amount: 6000,
          createdAt: new Date('2022-04-21'),
        },
        {
          id: 2,
          fundo: 'CPTS11',
          type: 'FII',
          category: 'Renda Variavel',
          amount: 6000,
          createdAt: new Date('2022-04-21'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('transactions', () => {
      return this.schema.all('transaction')
    });
    this.post('new-transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
})

export function App() {
  return (
    <BrowserRouter>
      <ContextTransactionProvider>
        <GlobalStyle />
        <Header />
        <Router />
        <Footer/>
      </ContextTransactionProvider>
    </BrowserRouter>
  );
}
