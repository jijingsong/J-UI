import * as React from 'react'
import Demo from '../../demo';
import FormExample1 from './form.example1'
import FormExample2 from './form.example2'
import FormExample3 from './form.example3'

const FormDemo = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='header-content'>
          <h1>Form 表单</h1>
          <div className='header-content-description'>具有数据收集、校验和提交功能的表单。</div>
        </div>
        <div className='header-content'>
          <h2>何时使用</h2>
          <div className='header-content-description'>用于创建一个实体或收集信息。</div>
        </div>
        <div className='header-content'>
          <h2>代码演示</h2>
        </div>
      </div>
      <Demo code={require('!!raw-loader!./form.example1.tsx').default} title='登录框' description='传入 fields 动态生成表单。'>
        <FormExample1 />
      </Demo>
      <Demo code={require('!!raw-loader!./form.example2.tsx').default} title='自定义校验' description='自定义校验规则，使用提供的 validator 函数获得校验结果，不符合的显示错误信息。errorsDisplayFirst 为false时显示全部错误。'>
        <FormExample2 />
      </Demo>
      <Demo code={require('!!raw-loader!./form.example3.tsx').default} title='异步校验' description='例如校验用户名是否已存在，需要发送异步请求，则在请求完成后再获取校验结果。'>
        <FormExample3 />
      </Demo>
    </React.Fragment>
  )
}

export default FormDemo