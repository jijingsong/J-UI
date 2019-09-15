import * as React from 'react'
import Dialog from './dialog'
import Button from '../button/button'

const DialogExmaple: React.FunctionComponent = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <div>
      <Button level='primary' onClick={() => setVisible(true)}>Open Dialog</Button>
      <Dialog
        visible={visible}
        title='Basic Modal'
        buttons={
          [
            <Button level='primary' onClick={() => setVisible(false)}>确定</Button>,
            <Button onClick={() => setVisible(false)}>取消</Button>
          ]
        }
        onClose={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Dialog>
    </div>
  )
}

export default DialogExmaple