import React, { useState, } from 'react';
import { Menu, Button, Layout, Breadcrumb } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,


} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const Gnb = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(prevState => !prevState);
    };

  return (
    <>
    <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
      <div className="logo" style={{ height:"32px", margin: "16px", background:"rgba(255, 255, 255, 0.3)" }} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  </>
    
  );
  
}

export default Gnb;