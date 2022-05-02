import { useMutation } from 'react-query';
import axios from 'axios';

// TODO: 쿼리들 하나로 묶는 index 쿼리 파일 만들어야 할듯
axios.defaults.baseURL = 'http://localhost:3065';

const setSignUpApi = (param:any) => {
    return axios.post('/user', param);
}

export const useSignUp = () => {
    return useMutation(setSignUpApi) 

}

