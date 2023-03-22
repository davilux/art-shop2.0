const router = require('express').Router()
const {generateAccessToken, generateRefreshToken, refreshAccessToken} = require('./jwt')
const {User} = require('../db/index').models
const bcrypt = require('bcrypt')

//REFRESH ACCESS TOKEN
router.post('/refreshAccessToken', async (req, res, next) => {
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

      const newAccessToken = refreshAccessToken(refreshToken)
      return newAccessToken ? res.json(newAccessToken) : res.sendStatus(403)
  }
  catch(e){
    console.error(e)
  }
})

//LOGIN:
// Authenticate user, then issue access token and refresh token.
router.post('/login', async (req, res, next) => {
  try{
      const {username, password} = req.body
      const userInstance = await User.findOne({
        where: {
          'username' : username
        }
      })
      if(!userInstance) {
        res.status(400).send('Cannot find user.')
        throw new Error()
      }
      const hashedPassword = userInstance.password
      const passwordsMatch = await bcrypt.compare(req.body.password, hashedPassword)

      if(!passwordsMatch) {
        return res.status(401).send('Invalid password.')
        throw new Error()
      }

      const accessToken = generateAccessToken({name : req.body.username})
      const refreshToken = generateRefreshToken({name : req.body.username})

      const refreshTokenInDb = await userInstance.update({
        "refreshToken": refreshToken
      })

      //TODO: Do I want both of these sent back?
      res.json({
          accessToken,
          refreshToken : refreshTokenInDb.refreshToken
      })
  }
  catch(e){
    //console.error(e)
    next(e)
  }

})

//LOG OUT
//Delete refresh and access tokens

//TODO: Manually expire the access token (instead of waiting for it to time out) so that after a user logs out, there isn't a window where an unregistered user can access the previously logged in user's private data
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
