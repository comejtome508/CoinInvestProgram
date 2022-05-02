import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { Form, Input, Checkbox, Button } from 'antd';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import { useSignUp } from 'queries/userQueries';

const ErrorMessage = styled.div`
    color: red;
`;

const Index = () => {
    const { mutate: submitData } = useSignUp();
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password]);
    const onSubmit = useCallback(() => {
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        submitData({ 
            email : email, 
            nickname : nickname,
            password : password
        })
    },[password, passwordCheck]);

  return (
    <Form onFinish={onSubmit}>
        <div>
            <label htmlFor='user-id'>이메일</label>
            <br />
            <Input name="user-id" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
            <label htmlFor='user-nickname'>닉네임</label>
            <br />
            <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
            <label htmlFor='user-password'>비밀번호</label>
            <br />
            <Input name="user-password" type={"password"} value={password} required onChange={onChangePassword} />
        </div>
        <div>
            <label htmlFor='user-password-check'>비밀번호 확인</label>
            <br />
            <Input name="user-password-check" type={"password"} value={passwordCheck} required onChange={onChangePasswordCheck} />
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType='submit'>가입하기</Button>
        </div>
    </Form>
  )
}

export default Index;