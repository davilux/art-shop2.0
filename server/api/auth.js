const router = require('express').Router()
const {generateAccessToken, generateRefreshToken, refreshActionToken} = require('./jwt')
let {refreshTokens} = require('./jwt')

const {User} = require('../db/index').models

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

router.post('/login', async (req, res) => {
  try{
      // TODO: authenticate user. Watch WebDevSimplified video for this

      const username = req.body.username
      const accessToken = generateAccessToken({name : req.body.username})
      const refreshToken = generateRefreshToken({name : req.body.username})

      //TODO remove this line. Use DB instead
      refreshTokens.push(refreshToken)

      const userInstance = await User.findOne({
        where: {
          'username' : req.body.username
        }
      })

      const refreshTokenInDb = await userInstance.update({
        "refreshToken": refreshToken
      })

      res.json({
          accessToken,
          refreshToken : refreshTokenInDb.refreshToken
      })
  }
  catch(e){
    console.error(e)
  }

})

//LOG OUT
//DELETE ACCESS TOKENS

router.delete('/logout', (req,res) => {
  //TODO: Delete refresh token and access token from database (instead of using the refreshTokens array). This must happen before deployment.

  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

module.exports = router
