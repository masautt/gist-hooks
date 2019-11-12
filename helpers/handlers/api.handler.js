require('dotenv').config();
const axios = require('axios')
const githubApiUrl = process.env.GITHUB_API_URL;


module.exports.apiHandler = (access_token, endpoint) => 
    new Promise((resolve, reject) =>
        axios.get(`${githubApiUrl}${endpoint}`, {
            headers: { Authorization: `token ${access_token}`}
        })
        .then(result => resolve(JSON.stringify(result.data)))
        .catch(error => reject(error)))