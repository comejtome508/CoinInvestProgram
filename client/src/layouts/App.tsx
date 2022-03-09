import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Menu, Button, Layout, Breadcrumb } from 'antd';

import Dashboard from '../pages/dashboard';
import Gnb from '../components/Gnb/gnb';
import 'antd/dist/antd.css';

const { Header, Sider, Content, Footer } = Layout;
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ minHeight: '100vh' }}>
        <Gnb />
          <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>

              <Routes>
                  <Route path="/" element={<Dashboard />} />
              </Routes>

            </Content>
          <Footer style={{ textAlign: 'center' }}> ©2022 Created by Youngnoh Goh</Footer>
      </Layout>

      </Layout>

    </QueryClientProvider>
  );
}

export default App;
