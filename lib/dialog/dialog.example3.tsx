import * as React from 'react'
import { Alert } from './dialog'
import Button from '../button/button'

const DialogExmaple: React.FunctionComponent = () => {
  const handleClick = () => {
    Alert('Alert Content')
  }
  return (
    <div>
      <Button level='primary' onClick={handleClick}>Alert</Button>
    </div>
  )
}

export default DialogExmaple