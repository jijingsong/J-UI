import * as React from 'react';
import classes from '../helpers/classes'
import './button.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'default' | 'primary' | 'dangerous'
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, level, children, ...rest } = props
  return (
    <button className={classes('jui-button', `jui-button-${level}`, className)} {...rest}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  level: 'default'
}

export default Button