import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Icon from '../icon/icon'
import { scopedClassMaker } from '../classes'
import '../index.scss'
import './dialog.scss'
import { ReactElement } from 'react';

interface Props {
  visible: boolean,
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
        <div className={scopedClass('close')} onClick={onClickClose}>
          <Icon name='close' />
        </div>
        <header className={scopedClass('header')}>
          header
        </header>
        <main className={scopedClass('main')}>
          {props.children}
        </main>
        {
          props.buttons && props.buttons.length &&
          <footer className={scopedClass('footer')}>
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

const Modal = (content: React.ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
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

const alert = (content: string) => {
  const buttons = <button onClick={() => close()}>ok</button>
  const close = Modal(content, [buttons])
}

const confirm = (content: string, ok?: () => void, cancel?: () => void) => {
  const onOk = () => {
    close()
    ok && ok()
  }
  const onCancel = () => {
    close()
    cancel && cancel()
  }
  const close = Modal(content, [
    <button onClick={onOk}>ok</button>,
    <button onClick={onCancel}>cancel</button>
  ], cancel)
}


export { alert, confirm, Modal }

export default Dialog