import { useMutation } from 'react-query';
import axios from 'axios';
import { Alert } from 'antd';

// TODO: 쿼리들 하나로 묶는 index 쿼리 파일 만들어야 할듯
axios.defaults.baseURL = 'http://localhost:3065';

//회원가입
const setSignUpApi = (param:any) => {
    return axios.post('/user', param);
}

export const useSignUp = () => {
    return useMutation(setSignUpApi) 

}

// 로그인
const setLoginApi = (param:any) => {
    return axios.post('/user/login', param);
}

export const useLogin = () => {
    return useMutation(setLoginApi,{
        onSuccess: () => {
            window.location.href = '/'
        }
    }); 

}

