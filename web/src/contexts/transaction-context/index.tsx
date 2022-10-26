import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Transaction } from "../../model/transaction";
import { transactionService } from "../../service/trasactions";

interface TrasactionContextProps {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void
}

export const TrasactionContext = createContext<TrasactionContextProps>({} as TrasactionContextProps);

interface propsChidren {
  children: ReactNode
}
export function ContextTransactionProvider({children}: propsChidren){

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const getTransaction = useCallback( async () => {
    return setTransactions(await transactionService());
  }, []);

  useEffect(() => {
    getTransaction();
  },[getTransaction])
  
  return(
    <TrasactionContext.Provider value={{transactions, setTransactions}}>
      {children}
    </TrasactionContext.Provider>
  );
}