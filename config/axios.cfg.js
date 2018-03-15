const axios = require('axios')

const HTTP = axios.create({
  baseURL: `https://api.r6stats.com/api/v1/players/`
})

module.exports = HTTP
