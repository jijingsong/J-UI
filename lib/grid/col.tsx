import * as React from 'react'
import { scopedClassMaker } from '../helpers/classes'
let scopedClass = scopedClassMaker('jui-col')

interface Props extends React.HTMLAttributes<HTMLElement> {
  span: number,
  gutter?: number,
  offset?: number
}

const Col: React.FunctionComponent<Props> = (props) => {
  const { className, span, gutter, offset, ...rest } = props
  return (
    <div
      className={scopedClass({ '': true, [span]: true, [`offset-${offset}`]: !!offset }, { extra: className })}
      style={{ paddingLeft: gutter || 0, paddingRight: gutter || 0 }}
      {...rest}
    >
      {props.children}
    </div>
  )
}

export default Col