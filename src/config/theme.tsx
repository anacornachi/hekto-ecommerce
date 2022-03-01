import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    pink: '#FB2E86',
    red: {
      50: '#ffe2e9',
      100: '#ffb2bf',
      200: '#ff8196',
      300: '#fd4f6d',
      400: '#FB2448',
      500: '#e10429',
      600: '#b0001f',
      700: '#7e0016',
      800: '#4e000c',
      900: '#200004',
    },
    blue: '#2F1AC4',
    offNavyBlue: '#3F509E',
    navyBlue: '#151875',
    pantonePurple: '#f6f5ff',
    purple: '#7E33E0',
    offPurple: '#9F63B5',
    offBlue: '#151875',
    skyBlue: 'linear-gradient(121.53deg, #F3F9FF 0%, #F1F0FF 100%)',
    lightPurple: '#E7E4F8',
    grey: '#9DA0AE',
    description: '#9096B2',
  },
  fonts: {
    josefin: "'Josefin Sans', sans-serif",
    lato: "'Lato', sans-serif",
  },
  components: {
    Button: {
      variants: {
        nav: {
          fontFamily: 'josefin',
          padding: 0,
          fontSize: '16px',
          h: 'fit-content',
          d: 'flex',
          alignItems: 'center',
          _focus: {
            boxShadow: 'none',
          },
        },
        primary: {
          fontFamily: 'josefin',
          px: '30px',
          fontSize: '16px',
          h: '44px',
          borderRadius: '3px',
          d: 'flex',
          alignItems: 'center',
          bg: 'pink',
          pt: '3px',
          color: 'white',
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
    Input: {
      variants: {
        outlineInput: {
          field: {
            size: 'lg',
            border: '1px',
            borderStyle: 'solid',
            borderColor: '#C2C5E1',
            borderRadius: '3px',
          },
        },
      },
    },
  },
});
export default theme;
