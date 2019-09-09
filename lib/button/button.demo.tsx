import * as React from 'react';
import Demo from '../../demo';
import ButtonExample1 from './button.example1'
import ButtonExample2 from './button.example2'
import ButtonExample3 from './button.example3'
import ButtonExample4 from './button.example4'
import './button.demo.scss'

const ButtonDemo = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='header-content'>
          <h1>Button按钮</h1>
          <div className='header-content-description'>按钮用于开始一个即时操作。</div>
        </div>
        <div className='header-content'>
          <h2>何时使用</h2>
          <div className='header-content-description'>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</div>
        </div>
        <div className='header-content'>
          <h2>代码演示</h2>
        </div>
      </div>
      <Demo code={require('!!raw-loader!./button.example1.tsx').default} title='按钮类型' description='按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。'>
        <ButtonExample1 />
      </Demo>
      <Demo code={require('!!raw-loader!./button.example2.tsx').default} title='不可用状态' description='添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。'>
        <ButtonExample2 />
      </Demo>
      <Demo code={require('!!raw-loader!./button.example3.tsx').default} title='加载中状态' description='添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。'>
        <ButtonExample3 />
      </Demo>
      <Demo code={require('!!raw-loader!./button.example4.tsx').default} title='按钮尺寸' description='按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。'>
        <ButtonExample4 />
      </Demo>
    </React.Fragment>
  )
}

export default ButtonDemo