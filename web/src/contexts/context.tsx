import { createContext, useEffect, useState } from 'react'
import { ReactNode } from 'react'
import { Transition } from '../model/transaction';
import { api } from '../service/api';

interface TrasactionContextProps {
  transactions: Transition[];
  setTransactions: (transactions: Transition[]) => void
}

export const TrasactionContext = createContext<TrasactionContextProps>({} as TrasactionContextProps);

interface propsChidren {
  children: ReactNode
}
export function ContextTransactionProvider({children}: propsChidren){

  const [transactions, setTransactions] = useState<Transition[]>([])

  useEffect(() => {
    api.get("transactions")
    .then(response => setTransactions(response.data.transactions))
  }, [])
  
  return(
    <TrasactionContext.Provider value={{transactions, setTransactions}}>
      {children}
    </TrasactionContext.Provider>
  );
}