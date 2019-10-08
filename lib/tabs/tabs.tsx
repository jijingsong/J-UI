import * as React from 'react'
import { scopedClassMaker } from '../helpers/classes'
import TabPane from './tabPane'
import './tabs.scss'
import { useRef, useState } from 'react';
let scopedClass = scopedClassMaker('jui-tabs')

interface Props {
  children: React.ReactElement | Array<React.ReactElement>,
  defaultActiveKey?: string,
  onChange: (value: string) => void,
  tabPosition?: 'vertical' | 'horizontal'
}
interface TabNodes {
  [k: string]: React.ReactNode
}

const Tabs: React.FunctionComponent<Props> = (props) => {
  const { defaultActiveKey } = props
  let keys = React.Children.map(props.children, ((el: React.ReactElement) => el.props.value))
  let tabNodes: TabNodes = {}
  let [activeKey, setActiveKey] = useState(defaultActiveKey || keys[0])
  let roleRef = useRef<HTMLDivElement>(null)
  let headerRef = useRef<HTMLDivElement>(null)
  let contentRef = useRef<HTMLDivElement>(null)

  const onTabClick = (value: string) => {
    setActiveKey(value)
    props.onChange(value)
  }

  const locateUnderline = (key: string) => {
    let { left: headerLeft, top: headerTop } = (headerRef.current as HTMLDivElement).getBoundingClientRect()
    let { left, right, top, bottom } = (tabNodes[key] as HTMLDivElement).getBoundingClientRect()
    if (props.tabPosition === 'vertical') {
      roleRef.current && (roleRef.current.style.height = bottom - top + 'px')
      roleRef.current && (roleRef.current.style.transform = `translateY(${top - headerTop}px)`)
    } else {
      roleRef.current && (roleRef.current.style.width = right - left + 'px')
      roleRef.current && (roleRef.current.style.transform = `translateX(${left - headerLeft}px)`)
      let index = keys.indexOf(key)
      contentRef.current && (contentRef.current.style.transform = `translateX(${-100 * index}%)`)
    }
  }

  const setTabNode = (key: string, node: React.ReactNode) => {
    tabNodes[key] = node
  }

  React.useEffect(() => {
    locateUnderline(activeKey)
  }, [activeKey])

  return (
    <div className={scopedClass({ '': true, 'vertical': props.tabPosition === 'vertical' })}>
      <div className={scopedClass({ 'top-bar': true, 'top-bar-vertical': props.tabPosition === 'vertical' })} ref={headerRef}>
        {
          props.children &&
          React.Children.map(
            props.children,
            (el: React.ReactElement) => {
              return (
                <div
                  onClick={() => onTabClick(el.props.value)}
                  className={scopedClass({ 'title': true, 'title-active': activeKey === el.props.value ? true : false, 'title-disabled': el.props.disabled })}
                  ref={node => setTabNode(el.props.value, node)}
                >
                  {el.props.name}
                </div>
              )
            }
          )
        }
        <div className={scopedClass({ 'underLine': true, 'underLine-vertical': props.tabPosition === 'vertical' })} ref={roleRef}></div>
      </div>
      <div className={scopedClass({ 'content': true, 'content-vertical': props.tabPosition === 'vertical' })} ref={contentRef}>
        {
          props.children &&
          React.Children.map(
            props.children,
            (el: React.ReactElement) => {
              let active = activeKey === el.props.value
              if (props.tabPosition === 'vertical' && !active) return null
              return (
                <div
                  className={scopedClass({ 'tabpane': true, [activeKey === el.props.value ? 'tabpane-active' : 'tabpane-inactive']: true })}>{el.props.children}
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  tabPosition: 'horizontal'
}

export default Tabs
export { TabPane }