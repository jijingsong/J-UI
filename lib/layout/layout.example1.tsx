import * as React from 'react'
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';

export default function () {
  return (
    <React.Fragment>
      <Layout style={{ height: 260 }} className='layout-1'>
        <Header className='x'>Header</Header>
        <Content className='y'>Content</Content>
        <Footer className='x'>Footer</Footer>
      </Layout>
      <br />
      <Layout style={{ height: 260 }} className='layout-2'>
        <Header className='x'>Header</Header>
        <Layout>
          <Aside className='z'>Aside</Aside>
          <Content className='y'>Content</Content>
        </Layout>
        <Footer className='x'>Footer</Footer>
      </Layout>
      <br />
      <Layout style={{ height: 260 }} className='layout-3'>
        <Header className='x'>Header</Header>
        <Layout>
          <Content className='y'>Content</Content>
          <Aside className='z'>Aside</Aside>
        </Layout>
        <Footer className='x'>Footer</Footer>
      </Layout>
      <br />
      <Layout style={{ height: 260 }} className='layout-4'>
        <Aside className='z'>Aside</Aside>
        <Layout>
          <Header className='x'>Header</Header>
          <Content className='y'>Content</Content>
          <Footer className='x'>Footer</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  )
}