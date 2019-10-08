import * as React from 'react';
import classes from '../helpers/classes'
import './button.scss'
import Icon from '../icon/icon'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'default' | 'primary' | 'dangerous' | 'dashed',
  disabled?: boolean,
  size?: 'large' | 'default' | 'small',
  loading?: boolean
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, level, children, disabled, size, loading, ...rest } = props
  return (
    <button
      className={classes('jui-button', `jui-button-${level}`, disabled ? 'disabled' : '', `${size}`, loading ? 'loading' : '', className)}
      {...rest}
    >
      <div>
        {loading ? <Icon name='loading' className='loading' /> : null}
        {children}
      </div>
    </button>
  )
}

Button.defaultProps = {
  level: 'default',
  size: 'default'
}

export default Button