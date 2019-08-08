import * as React from 'react'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Aside from './aside'

export default () => {
  return (
    <div>
      <div>
        <h1>第1个例子</h1>
        <Layout className='xxx' style={{ height: 300 }}>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </div>
      <div>
        <h1>第2个例子</h1>
        <Layout className='xxx' style={{ height: 300 }}>
          <Header></Header>
          <Layout>
            <Aside></Aside>
            <Content></Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
      <div>
        <h1>第3个例子</h1>
        <Layout className='xxx' style={{ height: 300 }}>
          <Header></Header>
          <Layout>
            <Content></Content>
            <Aside></Aside>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
      <div>
        <h1>第4个例子</h1>
        <Layout className='xxx' style={{ height: 300 }}>
          <Aside></Aside>
          <Layout>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}