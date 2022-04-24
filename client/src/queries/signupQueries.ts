import { useMutation } from 'react-query';
import axios from 'axios';

const setSignUpApi = (param:any) => {
    return axios.post('http://localhost:3065/user', param);
}

export const useSignUp = () => {
    return useMutation(setSignUpApi) 

}