import * as React from 'react'
import { scopedClassMaker } from '../helpers/classes'
let scopedClass = scopedClassMaker('jui-tabpane')

interface Props extends React.HTMLAttributes<HTMLElement> {
  name: React.ReactNode
  value: string
  disabled?: boolean
}

const TabPane: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return (
    <div
      className={scopedClass({}, { extra: className })}
      {...rest}
    >
      {props.children}
    </div>
  )
}

export default TabPane