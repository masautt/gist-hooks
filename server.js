const express = require('express')
const axios = require('axios')

require('dotenv').config()

const clientID = process.env.GIST_CLIENT_ID;
const clientSecret = process.env.GIST_CLIENT_SECRET;
const PORT = process.env.PORT;

const app = express()

app.get("/auth", (req, res) => res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}`));

app.get('/oauth/redirect', (req, res) => axios(oauthParams).then(response => response.data.access_token));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const oauthParams = {
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${req.query.code}`,
    headers: {
        accept: 'application/json'
    }
}
