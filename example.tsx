import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonDemo from './lib/button/button.demo';
import GridDemo from './lib/grid/grid.demo';
import LayoutDemo from './lib/layout/layout.demo';
import InputDemo from './lib/input/input.demo';
import DialogDemo from './lib/dialog/dialog.demo';
import FormDemo from './lib/form/form.demo';
import TabsDemo from './lib/tabs/tabs.demo';
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
          <ul className='aside-menu'>
            <li className='menu-item-group'>
              <div className='menu-item-group-title'>通用</div>
              <ul className='menu-item-group-list'>
                <li className='menu-item'>
                  <NavLink to="/button">Button 按钮</NavLink>
                </li>
              </ul>
            </li>
            <li className='menu-item-group'>
              <div className='menu-item-group-title'>布局</div>
              <ul className='menu-item-group-list'>
                <li className='menu-item'>
                  <NavLink to="/grid">Grid 栅格</NavLink>
                </li>
                <li className='menu-item'>
                  <NavLink to="/layout">Layout 布局</NavLink>
                </li>
              </ul>
            </li>
            <li className='menu-item-group'>
              <div className='menu-item-group-title'>数据录入</div>
              <ul className='menu-item-group-list'>
                <li className='menu-item'>
                  <NavLink to="/input">Input 输入框</NavLink>
                </li>
                <li className='menu-item'>
                  <NavLink to="/form">Form 表单</NavLink>
                </li>
              </ul>
            </li>
            <li className='menu-item-group'>
              <div className='menu-item-group-title'>数据展示</div>
              <ul className='menu-item-group-list'>
                <li className='menu-item'>
                  <NavLink to="/tabs">Tabs 标签页</NavLink>
                </li>
              </ul>
            </li>
            <li className='menu-item-group'>
              <div className='menu-item-group-title'>反馈</div>
              <ul className='menu-item-group-list'>
                <li className='menu-item'>
                  <NavLink to="/dialog">Dialog 对话框</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Switch>
            <Route path="/icon" component={IconDemo} />
            <Route path="/button" component={ButtonDemo} />
            <Route path="/grid" component={GridDemo} />
            <Route path="/dialog" component={DialogDemo} />
            <Route path="/layout" component={LayoutDemo} />
            <Route path="/input" component={InputDemo} />
            <Route path="/form" component={FormDemo} />
            <Route path="/tabs" component={TabsDemo} />
            <Redirect from="/" to="/button" />
          </Switch>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; 季靖松
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));