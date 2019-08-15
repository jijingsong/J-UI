import * as React from 'react'
import { scopedClassMaker } from '../helpers/classes'
let scopedClass = scopedClassMaker('jui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Footer: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={scopedClass('footer', { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default Footer