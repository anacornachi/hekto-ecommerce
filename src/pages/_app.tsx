import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";

function MyApp({ Component }) {
  // console.log(theme.components);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component />
    </ChakraProvider>
  );
}

export default MyApp;
