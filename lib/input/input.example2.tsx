import * as React from 'react'
import Input from './input'
import './input.example.scss'

const InputExample: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Input style={{marginRight: 30}} sizeType='large' placeholder='large size' />
      <Input style={{marginRight: 30}} sizeType='default' placeholder='default size' />
      <Input style={{marginRight: 30}} sizeType='small' placeholder='small size' />
    </React.Fragment>
  )
}

export default InputExample