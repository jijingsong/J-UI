import * as React from 'react'
import Demo from '../../demo';
import DialogExample1 from './dialog.example1'
import DialogExample2 from './dialog.example2'
import DialogExample3 from './dialog.example3'
import DialogExample4 from './dialog.example4'

const DialogDemo = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='header-content'>
          <h1>Dialog 对话框</h1>
          <div className='header-content-description'>模态对话框。</div>
        </div>
        <div className='header-content'>
          <h2>何时使用</h2>
          <div className='header-content-description'>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作。</div>
        </div>
        <div className='header-content'>
          <h2>代码演示</h2>
        </div>
      </div>
      <Demo code={require('!!raw-loader!./dialog.example1.tsx').default} title='基本' description='基本对话框。'>
        <DialogExample1 />
      </Demo>
      <Demo code={require('!!raw-loader!./dialog.example2.tsx').default} title='点击mask关闭' description='maskClosable 属性控制点击蒙层是否允许关闭。'>
        <DialogExample2 />
      </Demo>
      <Demo code={require('!!raw-loader!./dialog.example3.tsx').default} title='Alert' description='使用 Alert() 可以快捷提示信息。'>
        <DialogExample3 />
      </Demo>
      <Demo code={require('!!raw-loader!./dialog.example4.tsx').default} title='Confirm' description='使用 Confirm() 可以快捷地弹出确认框，第二个和第三个参数代表点击确认和取消的回调函数。'>
        <DialogExample4 />
      </Demo>
    </React.Fragment>
  )
}

export default DialogDemo

