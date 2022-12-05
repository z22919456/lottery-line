import '../styles/globals.css';
import React from 'react';
import { AppProps } from 'next/app';
import { Liff } from '@line/liff';
import LiffProvider from '../context/LiffContext';

function MyApp({ Component, pageProps }: AppProps) {
  return <LiffProvider><Component {...pageProps} /></LiffProvider>;
}

export default MyApp;
