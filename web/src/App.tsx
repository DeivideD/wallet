import { Header } from './components/header'
import { GlobalStyle } from './assets/style/global';
import { BrowserRouter } from 'react-router-dom';
import { ContextTransactionProvider } from './contexts/transaction-context';
import { Router } from './router/router';
import { ContextYeldProvider } from './contexts/yeld-context';
import { Footer } from './components/footer';
import { ContextPageProvider } from './contexts/page-context';


export function App() {
  return (
    <ContextTransactionProvider>
      <ContextYeldProvider>
        <ContextPageProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Router />
            <Footer />
          </BrowserRouter>
        </ContextPageProvider>
      </ContextYeldProvider>
    </ContextTransactionProvider>
  );
}
