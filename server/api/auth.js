const router = require('express').Router()
const {generateAccessToken, generateRefreshToken, refreshActionToken} = require('./jwt')
let {refreshTokens} = require('./jwt')

//REFRESH TOKENS

router.post('/token', async (req, res, next) => {
  const refreshToken = req.body.token
  if(refreshToken === null || refreshToken === undefined) return res.sendStatus(401)

  //check if refreshToken is still valid
  if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

  const newAccessToken = refreshActionToken(refreshToken)
  return newAccessToken ? res.json(newAccessToken) : res.sendStatus(403)
})

//LOGIN

router.post('/login', (req, res) => {
  // TODO: authenticate user. Watch WebDevSimplified video for this

  const username = req.body.username
  const user = {name : username}
  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)
  refreshTokens.push(refreshToken)
  res.json({
      accessToken,
      refreshToken
  })
})

//LOG OUT
//DELETE ACCESS TOKENS

router.delete('/logout', (req,res) => {
  //TODO: Delete refresh token and access token from database (instead of using the refreshTokens array). This must happen before deployment.

  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

module.exports = router
