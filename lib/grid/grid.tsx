import * as React from 'react'
import './grid.scss'
import { scopedClassMaker } from '../helpers/classes'
let scopedClass = scopedClassMaker('jui-row')

interface Props extends React.HTMLAttributes<HTMLElement> {
  gutter?: number,
  children: React.ReactElement | Array<React.ReactElement>
}

const Row: React.FunctionComponent<Props> = (props) => {
  const { className, gutter, ...rest } = props
  return (
    <div
      className={scopedClass({ '': true }, { extra: className })}
      style={{ marginLeft: `-${gutter}px`, marginRight: `-${gutter}px` }}
      {...rest}
    >
      {
        React.Children.map(props.children, (el: React.ReactElement, index) => React.cloneElement(el, gutter ? { gutter, key: index } : { key: index }))
      }
    </div>
  )
}

export default Row
export { Row }
export { default as Col } from './col'