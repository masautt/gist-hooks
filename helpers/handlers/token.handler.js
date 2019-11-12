const fs = require('fs');

module.exports.saveTokenToFile = (tokenInfo) => new Promise((resolve, reject) =>
    fs.writeFile('./data/token.data.json', JSON.stringify(tokenInfo, null, 4), (err) =>
        err ? reject(err) : resolve()));

module.exports.readTokenFromFile = () => new Promise((resolve, reject) =>
    fs.readFile('./data/token.data.json', (err, data) => {
        if (err) reject(err);
        let access_token = JSON.parse(data)["access_token"]
        resolve(access_token ? access_token : null);
    }))