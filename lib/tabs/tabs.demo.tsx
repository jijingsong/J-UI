import * as React from 'react'
import Demo from '../../demo';
import TabsExample1 from './tabs.example1'
import TabsExample2 from './tabs.example2'
import TabsExample3 from './tabs.example3'

const TabsDemo = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='header-content'>
          <h1>Tabs 标签页</h1>
          <div className='header-content-description'>选项卡切换组件。</div>
        </div>
        <div className='header-content'>
          <h2>何时使用</h2>
          <div className='header-content-description'>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</div>
        </div>
        <div className='header-content'>
          <h2>代码演示</h2>
        </div>
      </div>
      <Demo code={require('!!raw-loader!./tabs.example1.tsx').default} title='基本' description='默认选中第一项。'>
        <TabsExample1 />
      </Demo>
      <Demo code={require('!!raw-loader!./tabs.example2.tsx').default} title='禁用' description='禁用某一项。'>
        <TabsExample2 />
      </Demo>
      <Demo code={require('!!raw-loader!./tabs.example3.tsx').default} title='纵向' description='垂直排列。'>
        <TabsExample3 />
      </Demo>
    </React.Fragment>
  )
}

export default TabsDemo

