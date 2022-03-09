import { useQuery } from 'react-query';
import axios from 'axios';

const access_key = process.env.REACT_APP_UPBIT_ACCESS_KEY
const secret_key = process.env.REACT_APP_UPBIT_SECRET_KEY
const server_url = process.env.REACT_APP_UPBIT_SERVER_URL

const upbitApi = () => {
    return axios.get(server_url + '/v1/market/all?isDetails=false')
}

export const useGetAllMarketCode = () => {
    const onSuccess = (data:any) => {
        console.log('==========호출성공==========',data);
    }

    const onError = (error:any) => {
        console.log('==========호출실패==========',error);
    } 

    return useQuery('allMarkets', upbitApi, {
        onSuccess,
        onError,
        select: (data) => {
            console.log(data);
        }
    })
}