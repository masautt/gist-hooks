const express = require('express')
const axios = require('axios')

require('dotenv').config()

const { saveTokenToFile, readTokenFromFile } = require("./helpers/handlers/token.handler");
const { getGist, getAllGists } = require("./helpers/operations/readGist");

const clientId = process.env.GIST_CLIENT_ID;
const clientSecret = process.env.GIST_CLIENT_SECRET;
const PORT = process.env.PORT;
const testGistId = process.env.TEST_GIST_ID;
const githubAuthUrl = process.env.GITHUB_AUTH_URL;

const app = express()

app.get("/auth", (req, res) =>
    res.redirect(`${githubAuthUrl}/authorize`, {
        params: { client_id: clientId }
    })
);

app.get("/oauth/redirect", (req, res) =>
    axios.post(`${githubAuthUrl}/access_token`, {
        params: {
            client_id: clientId,
            client_secret: clientSecret,
            code: req.query.code
        }
    })
    .then(tokenInfo => saveTokenToFile({ access_token: tokenInfo.data.access_token }))
);

app.get("/gist/", (req, res) =>
    readTokenFromFile()
        .then(access_token => getGist(access_token, testGistId)
        .then(result => res.send(result)))
)

app.get("/gists/", (req, res) =>
    readTokenFromFile()
        .then(access_token => getAllGists(access_token, testGistId)
        .then(result => res.send(result)))
)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));