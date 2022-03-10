export const styles = (isHover) => ({
  featured: {
    actions: {
      variant: 'top',
      mainColor: '#EEEFFB',
    },
    description: {
      direction: 'column',
      bg: isHover ? '#2F1AC4' : 'white',
      fontFamily: 'josefin',
    },
    image: {
      bg: isHover ? '#F7F7F7' : '#F6F7FB',
    },
    main: {
      maxW: '270px',
      minW: '270px',
      color: isHover ? 'white' : 'navyBlue',
    },
    promotion: {
      color: 'pink',
      fontSize: '12px',
    },
    title: {
      color: isHover ? 'white' : 'pink',
      fontSize: '18px',
      fontFamily: 'lato',
      fontWeight: 'bold',
    },
  },
  grid: {
    actions: {
      variant: '',
      mainColor: 'white',
    },
    description: {
      direction: 'column',
      bg: 'white',
      fontFamily: 'josefin',
    },
    image: {
      bg: isHover ? 'lightGreen' : '#F6F7FB',
    },
    main: {
      maxW: '270px',
      minW: '270px',
      color: 'navyBlue',
    },
    promotion: {
      color: 'pink',
      fontSize: '12px',
    },
    title: {
      color: 'navyBlue',
      fontSize: '16px',
      fontFamily: 'josefin',
      fontWeight: 'normal',
    },
  },
  latest: {
    actions: {
      variant: '',
      mainColor: '#EEEFFB',
    },
    description: {
      direction: 'row',
      bg: 'white',
      fontFamily: 'josefin',
      justify: 'space-between',
    },
    image: {
      bg: isHover ? 'white' : '#F7F7F7',
    },
    main: {
      maxW: '360px',
      minW: '360px',
      color: 'navyBlue',
    },
    promotion: {
      color: 'red',
      fontSize: '12px',
    },
    title: {
      color: 'navyBlue',
      fontSize: '16px',
      fontFamily: 'josefin',
      fontWeight: 'normal',
    },
  },
  trending: {
    description: {
      direction: 'column',
      bg: 'white',
      fontFamily: 'josefin',
    },
    image: {
      bg: '#F5F6F8',
    },
    main: {
      maxW: '270px',
      minW: '270px',
      color: 'navyBlue',
      p: '13px',
    },
    promotion: {
      color: 'description',

      fontSize: '12px',
    },
    title: {
      color: 'navyBlue',
      fontSize: '18px',
      fontFamily: 'lato',
      fontWeight: 'bold',
    },
  },
});
