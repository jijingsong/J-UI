import * as React from 'react'
import Tabs, { TabPane } from './tabs'

const TabsExample: React.FunctionComponent = () => {
  const onChange = (value: string) => {
    console.log('value: ', value);
  }
  return (
    <React.Fragment>
      <Tabs defaultActiveKey='1' onChange={onChange} tabPosition='vertical'>
        <TabPane name='Tab1' value='1'>
          Content of Tab Pane 1
        </TabPane>
        <TabPane name='Tab2' value='2'>
          Content of Tab Pane 2
        </TabPane>
        <TabPane name='Tab3' value='3'>
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </React.Fragment>
  )
}

export default TabsExample