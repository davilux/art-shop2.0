const router = require('express').Router()
const {generateAccessToken, generateRefreshToken, refreshActionToken} = require('./jwt')
const {User} = require('../db/index').models

//REFRESH ACCESS TOKEN
router.post('/token', async (req, res, next) => {
  try{
      if(req.body.token === null || req.body.token === undefined) return res.sendStatus(401)

      //Check if there is a user with that refreshToken:
      const user = await User.findOne({
        where : {
          refreshToken : req.body.token
        }
      })
      const refreshToken = user.refreshToken
      //check if refreshToken is still valid
      if(!refreshToken) return res.sendStatus(403)

      const newAccessToken = refreshActionToken(refreshToken)
      return newAccessToken ? res.json(newAccessToken) : res.sendStatus(403)
  }
  catch(e){
    console.error(e)
  }
})

//LOGIN

router.post('/login', async (req, res) => {
  try{
      // TODO: authenticate user. Watch WebDevSimplified video for this

      const username = req.body.username
      const accessToken = generateAccessToken({name : req.body.username})
      const refreshToken = generateRefreshToken({name : req.body.username})

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

router.delete('/logout', async(req,res) => {
  try{
      //Find the user with the given refresh token.
      const user = await User.findOne({
        where : {
          refreshToken : req.body.token
        }
      })
      if(!user) res.sendStatus(500)
      //Remove the refresh token from the user.
      await user.update({
        refreshToken: ""
      })

      if(user.refreshToken === '') res.sendStatus(204)
  }
  catch(e){
    console.error(e)
  }
})

module.exports = router
