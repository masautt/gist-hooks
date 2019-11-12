const { apiHandler } = require("../handlers/api.handler");

module.exports.getGist = (access_token, gist_id) => 
    new Promise((resolve, reject) => 
        apiHandler(access_token, `/gists/${gist_id}`)
            .then(res => resolve(res))
            .catch(err => reject(err))
    )

module.exports.getGistRevision = (access_token, gist_id, gist_rev_id) => 
    new Promise((resolve, reject) => 
        apiHandler(access_token, `/gists/${gist_id}/${gist_rev_id}`)
            .then(res => resolve(res))
            .catch(err => reject(err))
    )

module.exports.getAllGists = (access_token) => 
    new Promise((resolve, reject) => 
        apiHandler(access_token, `/gists`)
            .then(res => resolve(res))
            .catch(err => reject(err))
    )   

module.exports.getPublicGists = (access_token)  => 
    new Promise((resolve, reject) => 
        apiHandler(access_token, `/gists/public`)
            .then(res => resolve(res))
            .catch(err => reject(err))
    )   

module.exports.getStarredGists = (access_token) => 
    new Promise((resolve, reject) => 
    apiHandler(access_token, `/gists/starred`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    ) 
