export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};


const BREAKPOINTS = {
  tabletMin: 37.5,
  laptopMin: 59.375,
  desktopMin: 81.25
}

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin}rem)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin}rem)`,
}

export const BREAKPTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300
}

export const QUERS = {
  phoneAndSmaller: `(max-width: ${BREAKPTS.phone/16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPTS.tablet/16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPTS.laptop/16}rem)`
}