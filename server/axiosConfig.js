//TODO: Use this in place of axios for all protected routes.

import axios from 'axios'

const accessToken = window.localStorage.getItem('accessToken')

const client = axios.create({
  timeout: 1000,
  headers: {
    authorization: accessToken
  }
})

export default client
