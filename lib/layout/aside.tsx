import * as React from 'react'
import { scopedClassMaker } from '../helpers/classes'
let scopedClass = scopedClassMaker('jui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Aside: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={scopedClass('aside', { extra: className })} {...rest}>Aside</div>
  )
}

export default Aside