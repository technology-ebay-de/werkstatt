const baseFont = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
const monoFont = 'FMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'
const fontSize = '16px'
const lineHeight = 1.65

export default {
  fontFamily: baseFont,
  monoFont,
  fontSize,
  lineHeight,
  body: {
    fontFamily: baseFont,
    fontSize,
    lineHeight
  },
  headline: {
    fontFamily: baseFont,
    fontSize: 48,
    lineHeight: 1.25
  },
  subheader: {
    fontFamily: baseFont,
    fontSize: 32,
    lineHeight: 1.25
  },
  title: {
    fontFamily: baseFont,
    fontSize: 24,
    lineHeight: 1.25
  },
  subtitle: {
    fontFamily: baseFont,
    fontSize: 18,
    lineHeight: 1.25
  }
}
