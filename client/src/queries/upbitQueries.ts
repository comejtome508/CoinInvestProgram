import { useQuery } from 'react-query';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const { sign, verify } = jwt;
// const sign = require('jsonwebtoken').sign;
// const uuidv4 = require('uuid/v4');

const access_key = process.env.REACT_APP_UPBIT_ACCESS_KEY
const secret_key = process.env.REACT_APP_UPBIT_SECRET_KEY
const server_url = process.env.REACT_APP_UPBIT_SERVER_URL

const payload = {
    access_key: access_key,
    nonce: uuidv4(),
}

const token = sign(payload, secret_key!);

const getAccountsApi = () => {
    return axios.get(server_url + "/v1/accounts", {headers: {Authorization: `Bearer ${token}`}})
}

const upbitApi = () => {
    return axios.get(server_url + '/v1/market/all?isDetails=false')
}

export const useGetAccounts = () => {
    const onSuccess = (data:any) => {
        console.log('==========호출성공==========',data);
    }

    const onError = (error:any) => {
        console.log('==========호출실패==========',error);
    } 

    return useQuery('accounts', getAccountsApi, {
        onSuccess,
        onError,
        select: (data) => {
            console.log(data);
        }
    }) 

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