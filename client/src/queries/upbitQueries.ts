import { useQuery } from 'react-query';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import CryptoJS from "crypto-js";
import queryString from "query-string";
// const queryEncode = require("querystring").encode

const { sign, verify } = jwt;


const access_key = process.env.REACT_APP_UPBIT_ACCESS_KEY
const secret_key = process.env.REACT_APP_UPBIT_SECRET_KEY
const server_url = process.env.REACT_APP_UPBIT_SERVER_URL

const state = 'done'
const uuids = ['']

const non_array_body = {
    state: state,
}
const array_body = {
    uuids: uuids,
}
const body = {
    ...non_array_body,
    ...array_body
}

const uuid_query = uuids.map(uuid => `uuids[]=${uuid}`).join('&')
// const query = queryEncode(non_array_body) + '&' + uuid_query
const query = queryString.stringify(non_array_body) + '&' + uuid_query;

// const hash = crypto.createHash('sha512')
const hash = CryptoJS.SHA512(query);
// const queryHash = hash.update(query, 'utf-8').digest('hex')
const queryHash = hash.toString(CryptoJS.enc.Hex);

const accountPayload = {
    access_key: access_key,
    nonce: uuidv4(),
}
const orderPayload = {
    access_key: access_key,
    nonce: uuidv4(),
    query_hash: queryHash,
    query_hash_alg: 'SHA512',
}

const accountToken = sign(accountPayload, secret_key!);
const orderToken = sign(orderPayload, secret_key!);


const getAccountsApi = () => {
    return axios.get("https://cors-anywhere.herokuapp.com/"+server_url+"/v1/accounts", {headers: {Authorization: `Bearer ${accountToken}`}})
}

const upbitApi = () => {
    return axios.get( "https://cors-anywhere.herokuapp.com/"+server_url+'/v1/market/all?isDetails=false')
}

const getOrderListApi = () => {
    return axios.get("https://cors-anywhere.herokuapp.com/"+server_url+'/v1/orders?'+query, {headers: {Authorization: `Bearer ${orderToken}`}, data: body})
}

export const useGetAccounts = () => {
    const onSuccess = (result:any) => {
        console.log('==========호출성공==========',result);
    }

    const onError = (error:any) => {
        console.error('==========호출실패==========',error);
    } 

    return useQuery('accounts', getAccountsApi, {
        onSuccess,
        onError,
        select: (data) => {
            const accountData = data.data;
            return accountData;
        },
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
            console.log(data.data);
            return data;
        }
    })
}

export const useGetOrderList = () => {
    const onSuccess = (data:any) => {
        console.log('==========호출성공==========',data);
    }

    const onError = (error:any) => {
        console.log('==========호출실패==========',error);
    } 

    return useQuery('orderLists', getOrderListApi, {
        onSuccess,
        onError,
        select: (data) => {
            console.log(data.data);
            return data;
        }
    })
}