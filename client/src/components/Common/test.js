const request = require('request')
const uuidv4 = require("uuid/v4")
const sign = require('jsonwebtoken').sign

const access_key = process.env.REACT_APP_UPBIT_ACCESS_KEY
const secret_key = process.env.REACT_APP_UPBIT_SECRET_KEY
const server_url = process.env.REACT_APP_UPBIT_SERVER_URL

const payload = {
    access_key: access_key,
    nonce: uuidv4(),
}

const token = sign(payload, secret_key)

console.log("token : ", token)

const options = {
    method: "GET",
    url: server_url + "/v1/accounts",
    headers: {Authorization: `Bearer ${token}`},
}

request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})