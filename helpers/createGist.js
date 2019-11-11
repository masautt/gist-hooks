const axios = require('axios')
require('dotenv').config()

const authCreds  = {
    clientId : process.env.GIST_CLIENT_ID,
    clientSecret : process.env.GIST_CLIENT_SECRET,
    clientToken : process.env.GIST_ACCESS_TOKEN,
    clientURL : process.env.GIST_URL
}

const authCreds2  = {
    clientId : "d81e2cb9f71332eb8e3c",
    clientSecret : "cdb31a8c81cec516d15c42f1bc6392e675be2655",
    clientToken : "cdb31a8c81cec516d15c42f1bc6392e675be2655",
    clientURL : "https://api.github.com"
}

const createGist = ({ clientId, clientSecret, clientToken, clientURL }) => {
    axios({
        method: 'get',
        url: `${clientURL}/user?client_id=${clientId}&client_secret=${clientSecret}`,
        headers: {
            accept: 'application/json',
            Authorization: `token ${clientToken}`
        }
    }).then(res => console.log(res.data))
}

const getUser = () => {
    axios({
        method: 'get',
        url: `https://api.github.com/users/masautt`,
        headers: {
            accept: 'application/json',
        }
    }).then(res => console.log(res));
}


console.log(getUser());

