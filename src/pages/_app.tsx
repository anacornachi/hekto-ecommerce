import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../config/theme';
import Header from '@components/Header';
import Footer from '@components/Footer'
import AboutUs from '@components/About/AboutUs'

function MyApp({Component}) {
  // console.log(theme.components);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component />
      <Footer />
      <AboutUs />
    </ChakraProvider>
  );
}

export default MyApp;
