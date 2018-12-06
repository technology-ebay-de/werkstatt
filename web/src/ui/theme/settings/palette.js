// Note
// Uses this palette generator
// https://palx.jxnblk.com/0077cc

const grey = {
  900: '#2d2d2d',
  800: '#3e3e3e',
  700: '#4f4f4f',
  600: '#5b5b5b',
  500: '#666666',
  400: '#8f8f8f',
  300: '#adadad',
  200: '#c6c6c6',
  100: '#dbdbdb',
  50: '#eeeeee'
}

const common = {
  black: '#1c1c1c',
  white: '#f0f0f0'
}

const colors = {
  primary: '#0077cc',
  secondary: '#00cc55'
}

const dark = {
  background: {
    default: grey[900],
    fold: common.black,
    paper: grey[800],
    paperInvert: grey[50]
  },
  text: {
    primary: grey[50],
    secondary: grey[100],
    primaryInvert: grey[900]
  }
}

export default {
  ...dark,
  primary: {
    base: colors.primary,
    text: grey[50]
  },
  secondary: {
    base: colors.secondary,
    text: grey[50]
  }
}
