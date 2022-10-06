import {instance} from "../hooks/useAxiosLoader";
import queryString from "query-string";
import CryptoJS from "crypto-js";
import {v4 as uuidv4} from "uuid";
import jwt from "jsonwebtoken";


const { sign, verify } = jwt;


const access_key = process.env.REACT_APP_UPBIT_ACCESS_KEY
const secret_key = process.env.REACT_APP_UPBIT_SECRET_KEY
const server_url = process.env.REACT_APP_UPBIT_SERVER_URL

const UPBIT_API_URL = process.env.REACT_APP_UPBIT_SERVER_URL;

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

console.log("accountPayload : ",accountPayload)
console.log("secret_key : ",secret_key)
const accountToken = sign(accountPayload, secret_key!);
const orderToken = sign(orderPayload, secret_key!);

export const UpbitService = {
    getAllAccounts: async () => {
        const data = await instance.get(`${UPBIT_API_URL}/v1/accounts`,
            {headers: {Authorization: `Bearer ${accountToken}`}}
        );
        return data;
    },

    getAllMarketInfo: async () => {
        const data = await instance.get(`${UPBIT_API_URL}/v1/market/all?isDetails=false`);
        return data;
    },

    getOrderLists: async () => {
        const data = await instance.get(`${UPBIT_API_URL}/v1/orders?`+query,
            {headers: {Authorization: `Bearer ${orderToken}`}, data: body})
    }
}