import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    pink: '#FB2E86',
    red: '#FB2448',
    blue: '#2F1AC4',
    offNavyBlue: '#3F509E',
    navyBlue: '#151875',
    pantonePurple: '#f6f5ff',
    purple: '#7E33E0',
    offPurple: '#9F63B5',
    offBlue: '#151875',
    skyBlue: 'linear-gradient(121.53deg, #F3F9FF 0%, #F1F0FF 100%)',
    lightPurple: '#E7E4F8'
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
      },
    },
  },
});
export default theme;
