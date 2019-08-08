import * as React from 'react'
import { scopedClassMaker } from '../helpers/classes'
let scopedClass = scopedClassMaker('jui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={scopedClass('header', { extra: className })} {...rest}>Header</div>
  )
}

export default Header