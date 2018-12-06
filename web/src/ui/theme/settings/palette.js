// Note
// Uses this palette generator
// https://palx.jxnblk.com/6cb6d9

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
    light: '#6cb6d9',
    base: '#61a4c4',
    dark: '#5590ac',
    text: grey[50]
  },
  secondary: {
    light: '#6cd9c5',
    base: '#61c4b2',
    dark: '#55ac9c',
    text: grey[50]
  }
}
