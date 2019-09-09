import * as React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer"
import { useState } from 'react';
import Icon from './lib/icon/icon'
import './demo.scss'

interface Props {
  code: string,
  title?: string,
  description?: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false)
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
  return (
    <div className='example'>
      <div className='example-content'>
        {props.children}
      </div>
      <div className='code-example-box'>
        <div className='code-title'>{props.title}</div>
        <div className='code-description'>
          {props.description}
          <span className='code-wrap' onClick={() => setCodeVisible(!codeVisible)}><Icon name='codepen' /></span>
        </div>
        <div className='code-example'>
          {codeVisible && code}
        </div>
      </div>
    </div>
  )
}

export default Demo