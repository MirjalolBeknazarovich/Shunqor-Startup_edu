import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/roboto';


import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'src/config/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;