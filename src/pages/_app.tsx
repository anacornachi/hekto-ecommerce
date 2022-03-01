import {ChakraProvider} from '@chakra-ui/react';
import theme from '../config/theme';
import Header from '@components/Header';
import Footer from '@components/Footer';
import {SessionProvider} from 'next-auth/react';
import {AppProps} from 'next/app';
import '../styles/global.css';

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  // console.log(theme.components);

  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
