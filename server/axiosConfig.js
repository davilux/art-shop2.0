//TODO: Use this in place of axios for all protected routes.

import axios from 'axios'

const accessToken = window.localStorage.getItem('accessToken')
const refreshToken = window.localStorage.getItem('refreshToken')

const client = axios.create({
  tokens : {
      accessToken,
      refreshToken
  }
})

export default client
