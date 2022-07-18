import React, {useState} from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Menu, Button, Layout, Breadcrumb, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Dashboard from 'pages/Dashboard';
import ShareBoard from 'pages/Board/List';
import SignUp from 'pages/signup';
import Login from 'pages/Login';
import BoardDetail from 'pages/Board/Detail';
import Gnb from "../components/common/Gnb";
import 'antd/dist/antd.css';

const { Header, Sider, Content, Footer } = Layout;
const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onClickSignUp = () => {
    window.location.href = '/signUp'
  }
  const onClickLogin = () => {
    window.location.href = '/login'
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ minHeight: '100vh' }}>
        <Gnb />
          <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'flex-end' }} >
          <div style={{alignSelf: 'center', marginRight:10}} >
            {isLoggedIn 
            ? <Avatar icon={<UserOutlined />} /> 
            : <>
            <Button onClick={onClickLogin}>로그인</Button>
            <Button onClick={onClickSignUp}>회원가입</Button>
            </>}
            </div>
          </Header>
            <Content style={{ margin: '0 16px' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb> */}

              <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/shareBoard" element={<ShareBoard />} />
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/login" element={<Login />}/>
                  <Route path="/boardDetail" element={<BoardDetail />} />
              </Routes>

            </Content>
          <Footer style={{ textAlign: 'center' }}> ©2022 Created by Youngnoh Goh</Footer>
      </Layout>

      </Layout>

    </QueryClientProvider>
  );
}

export default App;
