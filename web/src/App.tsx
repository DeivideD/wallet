import { Header } from './components/header'
import { GlobalStyle } from './assets/style/global';
import { BrowserRouter } from 'react-router-dom';
import { ContextTransactionProvider } from './contexts/context';
import { Router } from './components/router/router';
import { Footer } from './components/footer';


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
