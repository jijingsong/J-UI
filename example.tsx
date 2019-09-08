import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';
import { Layout, Header, Aside, Content, Footer } from './lib/layout/layout'
const logo = require('./logo.png')
import './example.scss'

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="40" height="40" alt="" />
          <span> J-UI </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon 图标</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">dialog 对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">layout 布局</NavLink>
            </li>
            <li>
              <NavLink to="/form">form 表单</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; 季靖松
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));