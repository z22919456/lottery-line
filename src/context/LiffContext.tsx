import { Liff } from '@line/liff';
import React, {
  ReactNode, useEffect, createContext, useState, useContext,
} from 'react';

type LiffContextValue = {
  liff: Liff | null
};

export const LiffContext = createContext<LiffContextValue>({ liff: null });

type Props = {
  children: ReactNode
};

const LiffProvider = ({ children }: Props) => {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // @ts-ignore
      const liff: Liff = await import('@line/liff');
      console.log({ id: process.env.NEXT_PUBLIC_BINDING_LIFF });
      await liff.init({ liffId: process.env.NEXT_PUBLIC_BINDING_LIFF as string });
      await liff.login();
      setLiffObject(liff);
    })()
      .catch((error) => {
        console.log(`liff.init() failed: ${error}`);
        setLiffError(error.toString());
      });
  }, []);

  return (
    <LiffContext.Provider value={{
      liff: liffObject,
    }}>
      {children}
    </LiffContext.Provider>);
};

export const useLiff = () => useContext(LiffContext);

export default LiffProvider;
