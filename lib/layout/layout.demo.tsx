import * as React from 'react'
import Demo from '../../demo';
import LayoutExample1 from './layout.example1'

const LayoutDemo = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='header-content'>
          <h1>Layout 布局</h1>
          <div className='header-content-description'>协助进行页面级整体布局。</div>
        </div>
        <div className='header-content'>
          <h2>何时使用</h2>
          <div className='header-content-description'>快速实现简单页面结构。</div>
        </div>
        <div className='header-content'>
          <h2>代码演示</h2>
        </div>
      </div>
      <Demo code={require('!!raw-loader!./layout.example1.tsx').default} title='基本结构' description='典型的页面布局。'>
        <LayoutExample1 />
      </Demo>
    </React.Fragment>
  )
}

export default LayoutDemo

