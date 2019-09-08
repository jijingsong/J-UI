import * as React from 'react'
import classes from '../helpers/classes'
import './input.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <input className={classes('jui-input', className)} {...rest} />
    )
}

export default Input