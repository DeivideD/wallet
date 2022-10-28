import { createContext, useState } from 'react'
import { ReactNode } from 'react'

interface PageContextProps {
  page: string;
  setPage: (page: string) => void
}

export const PageContext = createContext<PageContextProps>({} as PageContextProps);

interface propsChidren {
  children: ReactNode
}
export function ContextPageProvider({children}: propsChidren){


  const [page, setPage] = useState('');

  return(
    <PageContext.Provider value={{page, setPage}}>
      {children}
    </PageContext.Provider>
  );
}