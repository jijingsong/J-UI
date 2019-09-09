import * as React from 'react'
import Demo from '../../demo';
import GridExample1 from './grid.example1'
import GridExample2 from './grid.example2'
import GridExample3 from './grid.example3'

const GridDemo = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='header-content'>
          <h1>Grid 栅格</h1>
          <div className='header-content-description'>24格栅格系统。</div>
        </div>
        <div className='header-content'>
          <h2>何时使用</h2>
          <div className='header-content-description'>快速实现栅格布局。</div>
        </div>
        <div className='header-content'>
          <h2>代码演示</h2>
        </div>
      </div>
      <Demo code={require('!!raw-loader!./grid.example1.tsx').default} title='基础栅格' description='使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。'>
        <GridExample1 />
      </Demo>
      <Demo code={require('!!raw-loader!./grid.example2.tsx').default} title='区块间隔' description='栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性。'>
        <GridExample2 />
      </Demo>
      <Demo code={require('!!raw-loader!./grid.example3.tsx').default} title='左右偏移' description='使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。'>
        <GridExample3 />
      </Demo>
    </React.Fragment>
  )
}

export default GridDemo

