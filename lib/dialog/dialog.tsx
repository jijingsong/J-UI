import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Icon from '../icon/icon'
import Button from '../button/button'
import { scopedClassMaker } from '../helpers/classes'
import '../index.scss'
import './dialog.scss'

interface Props {
  visible: boolean,
  title?: string,
  buttons?: Array<React.ReactElement>,
  onClose: React.MouseEventHandler,
  maskClosable?: boolean,
}

let scopedClass = scopedClassMaker('jui-dialog')

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.maskClosable) {
      props.onClose(e)
    }
  }
  const component = props.visible ?
    <React.Fragment>
      <div className={scopedClass('mask')} onClick={onClickMask}></div>
      <div className={scopedClass()}>
        {
          props.title ? <header className={scopedClass('header')}>
            <div className={scopedClass('title')}>
              {props.title}
            </div>
            <div className={scopedClass('close')} onClick={onClickClose}>
              <Icon name='close' />
            </div>
          </header> : null
        }
        <main className={scopedClass('main')}>
          {props.children}
        </main>
        {
          props.buttons && props.buttons.length &&
          <footer className={scopedClass('footer')} style={!props.title ? { borderTop: '1px solid #fff' } : {}}>
            {
              props.buttons.map((button, index) => {
                return React.cloneElement(button, { key: index })
              })
            }
          </footer>
        }
      </div>
    </React.Fragment>
    :
    null

  return (
    ReactDOM.createPortal(component, document.body) //放到外层，body下
  )
}

Dialog.defaultProps = {
  maskClosable: false
}

const Modal = (content: React.ReactNode, buttons?: Array<React.ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = (
    <Dialog
      visible={true}
      onClose={() => { close(); afterClose && afterClose() }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  )
  let div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)

  return close
}

const Alert = (content: string) => {
  const buttons = <Button level='primary' onClick={() => close()}>确定</Button>
  const close = Modal(content, [buttons])
}

const Confirm = (content: string, ok?: () => void, cancel?: () => void) => {
  const onOk = () => {
    close()
    ok && ok()
  }
  const onCancel = () => {
    close()
    cancel && cancel()
  }
  const close = Modal(content, [
    <Button level='primary' onClick={onOk}>确定</Button>,
    <Button onClick={onCancel}>取消</Button>
  ], cancel)
}


export { Alert, Confirm, Modal }

export default Dialog