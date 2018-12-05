import styled from 'styled-components'
import ButtonBase from '../ButtonBase'

const variants = {
  filled: ({ palette }, color) => ({
    background: palette[color].base,
    color: palette[color].text
  }),
  outline: ({ palette }, color) => ({
    border: `1px solid ${palette[color].base}`,
    color: palette[color].base
  })
}

const sizes = {
  small: ({ spacing }) => ({
    padding: `${spacing.unit / 2}px ${spacing.unit}px`,
    height: 30
  }),
  medium: ({ spacing }) => ({
    padding: `${spacing.unit}px ${spacing.unit * 2}px`,
    height: 36
  }),
  large: ({ spacing }) => ({
    padding: `${spacing.unit * 2}px ${spacing.unit * 3}px`,
    height: 48
  })
}

const Button = styled(ButtonBase)(({ theme, color, variant, size }) => ({
  ...variants[variant](theme, color),
  ...sizes[size](theme),
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1
}))

Button.defaultProps = {
  color: 'primary',
  variant: 'filled',
  size: 'medium'
}

Button.displayName = 'Button'

export default Button
