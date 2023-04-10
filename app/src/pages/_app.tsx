import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider, CSSReset, GlobalStyle } from '@chakra-ui/react';

import themes from '@/theme';

// fonts
import "@fontsource/londrina-solid/400.css";
import "@fontsource/urbanist/200.css";

import Layout from '@/components/shared/Layout';
import LazyShow from '@/components/shared/LazyShow';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={themes}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;