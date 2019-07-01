import * as React from 'react'
import * as ReactDom from 'react-dom'
// import Button from './button'
import Icon from './icon'

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target)
}

ReactDom.render(
  <Icon name='wechat'
    onClick={fn}
  />,
  document.querySelector('#root')
)