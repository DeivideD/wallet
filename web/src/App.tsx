import { Header } from './components/header/header'
import { GlobalStyle } from './assets/style/global';
import { BrowserRouter } from 'react-router-dom';
import { ContextTransactionProvider } from './contexts/transaction_context/transaction';
import { Router } from './router/router';
import { ContextYeldProvider } from './contexts/yeld_context/yeld';
import { Footer } from './components/footer/footer';
import { ContextPageProvider } from './contexts/page_context/page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ContextTransactionProvider>
      <ContextYeldProvider>
        <ContextPageProvider>
          <BrowserRouter>
            <GlobalStyle />
            <ToastContainer />
            <Header />
            <Router />
            <Footer />
          </BrowserRouter>
        </ContextPageProvider>
      </ContextYeldProvider>
    </ContextTransactionProvider>
  );
}
