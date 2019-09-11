import * as React from 'react'
import { TextArea } from './input'
import './input.example.scss'

const TextAreaExample: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div>
        <TextArea placeholder='textarea' />
      </div>
    </React.Fragment>
  )
}

export default TextAreaExample