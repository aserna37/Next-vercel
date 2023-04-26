
import { NextPage } from 'next';
import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?:(page:ReactElement) => ReactNode;
}

type AppPropsWithLayouts = AppProps & {
  Component:NextPageWithLayout
}

function MyApp({ Component, pageProps }:AppPropsWithLayouts) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
