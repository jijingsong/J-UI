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
  let isArray = props.children && length in props.children
  return (
    <div
      className={scopedClass({ '': true }, { extra: className })}
      style={{ marginLeft: `-${gutter}px`, marginRight: `-${gutter}px` }}
      {...rest}
    >
      {
        isArray
          ? (props.children as Array<React.ReactElement>)
            .map((child, index) => React.cloneElement(child, gutter ? { gutter, key: index } : { key: index }))
          : props.children
      }
    </div>
  )
}

export default Row
export { Row }
export { default as Col } from './col'