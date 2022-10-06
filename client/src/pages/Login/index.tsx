import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, Input, Checkbox, Button } from 'antd';
import useInput from 'hooks/useInput';
import { useLogin } from 'queries/UserQueries';


const Index = () => {
    const { mutate: setLogin } = useLogin();
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const onSubmit = useCallback(() => {
        setLogin({
            email: email,
            password:password,
        })
    }, [password]);
    
  return (
    <Form onFinish={onSubmit}>
        <div>
            <label htmlFor='user-id'>이메일</label>
            <br />
            <Input name="user-id" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
            <label htmlFor='user-password'>비밀번호</label>
            <br />
            <Input.Password name="user-password" type={"password"} value={password} required onChange={onChangePassword} />
        </div>
        <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType='submit'>로그인</Button>
        </div>
    </Form>
  )
}

export default Index;