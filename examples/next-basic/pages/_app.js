import { Provider as BumbagProvider } from 'bumbag';

function MyApp({ Component, pageProps }) {
  return (
    <BumbagProvider isSSR>
      <Component {...pageProps} />
    </BumbagProvider>
  );
}

export default MyApp;
