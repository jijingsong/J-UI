import * as React from 'react'
import { Confirm } from './dialog'
import Button from '../button/button'

const DialogExmaple: React.FunctionComponent = () => {
  const handleClick = () => {
    Confirm('Confirm Content', () => {
      console.log('success');
    }, () => {
      console.log('cancel');
    })
  }
  return (
    <div>
      <Button level='primary' onClick={handleClick}>Confirm</Button>
    </div>
  )
}

export default DialogExmaple