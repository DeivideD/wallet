import { createContext, useCallback, useEffect, useState } from 'react';
import { ReactNode } from 'react'
import { Yeld } from '../../model/yeld';
import { yeldService } from '../../service/yeld';

interface YeldContextProps {
  yelds: Yeld[];
  setYelds: (yelds: Yeld[]) => void
}

export const YeldContext = createContext<YeldContextProps>({} as YeldContextProps);

interface propsChidren {
  children: ReactNode
}
export function ContextYeldProvider({children}: propsChidren){


  const [yelds, setYelds] = useState<Yeld[]>([])

  const getYeld = useCallback( async () => {
    return setYelds(await yeldService());
  }, []);

  useEffect(() => {
    getYeld();
  },[getYeld])
  
  return(
    <YeldContext.Provider value={{yelds, setYelds}}>
      {children}
    </YeldContext.Provider>
  );
}