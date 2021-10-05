import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      white: {
        150: '#F3F4F6',
        50: '#FCFCFC',
      },
      yellow: {
        200: '#FACC15',
      },
      blue: {
        400: '#3B82F6',
      },
      red: {
        400: '#DC2626',
      },
      black: {
        600: '#404040',
      },
    },
    fonts: {
      body: '"Inter", sans-serif',
    },
  },
);

export default theme;
