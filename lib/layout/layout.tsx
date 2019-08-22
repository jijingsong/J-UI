import * as React from 'react'
import { scopedClassMaker } from '../helpers/classes'
import './layout.scss'
import Aside from './aside'

let scopedClass = scopedClassMaker('jui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement | Array<React.ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  const hasAside = length in (props.children as Array<React.ReactElement>) &&
    (props.children as Array<React.ReactElement>).some(node => node.type === Aside)
  return (
    <div className={scopedClass({ '': true, hasAside }, { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default Layout
export { Layout }
export { default as Header } from './header'
export { default as Aside } from './aside'
export { default as Content } from './content'
export { default as Footer } from './footer'