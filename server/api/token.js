const router = require('express').Router()
const {generateAccessToken, generateRefreshToken} = require('./jwt')

router.post('/', async (req, res, next) => {
  const refreshToken = req.body.token
  if(refreshToken === null || refreshToken === undefined) return res.sendStatus(401)

})

module.exports = router
