import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';

const theme = {
  colors,
  fonts: {
    heading: `'Londrina Solid', cursive`,
    body: `'Urbanist', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'black.500',
        color: 'white',
      }
    },
  }
}

export default extendTheme(theme);