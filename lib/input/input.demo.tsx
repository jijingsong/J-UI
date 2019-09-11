import * as React from 'react'
import Demo from '../../demo';
import InputExample1 from './input.example1'
import InputExample2 from './input.example2'
import InputExample3 from './input.example3'
import InputExample4 from './input.example4'

const InputDemo = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='header-content'>
          <h1>Input 输入框</h1>
          <div className='header-content-description'>通过鼠标或键盘输入内容，是最基础的表单域的包装。</div>
        </div>
        <div className='header-content'>
          <h2>何时使用</h2>
          <div className='header-content-description'>需要用户输入表单域内容时。</div>
        </div>
        <div className='header-content'>
          <h2>代码演示</h2>
        </div>
      </div>
      <Demo code={require('!!raw-loader!./input.example1.tsx').default} title='基本使用' description='基本使用。'>
        <InputExample1 />
      </Demo>
      <Demo code={require('!!raw-loader!./input.example2.tsx').default} title='三种大小' description='我们为 Input 输入框定义了三种尺寸（大、默认、小）。'>
        <InputExample2 />
      </Demo>
      <Demo code={require('!!raw-loader!./input.example3.tsx').default} title='搜索框' description='带有搜索按钮的输入框。'>
        <InputExample3 />
      </Demo>
      <Demo code={require('!!raw-loader!./input.example4.tsx').default} title='文本输入框' description='默认的文本输入框。'>
        <InputExample4 />
      </Demo>
    </React.Fragment>
  )
}

export default InputDemo