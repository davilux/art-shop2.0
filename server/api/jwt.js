const {RefreshToken} = require('../db/index').models

/* This document contains functions and middleware for JWT. */

const jwt = require('jsonwebtoken')
require('dotenv').config()

//TODO: Move saved refresh tokens to the database
let refreshTokens = []

/**
 *  Generates an access token.
 * @param {User object} user
 * @returns Access token.
 */
function generateAccessToken(user){
  //We tell the token to expire after 10 minutes. This improves security, because if someone were to somehow find a user's token, it would only be good for 10 minutes.
  return jwt.sign(user, process.env.SECRET_KEY, {expiresIn : '10m'})
}

/**
 * Generates a refresh token for a given user.
 * @param {User object} user
 * @returns Refresh token.
 */
function generateRefreshToken(user){
  //Refresh tokens are used to generate new access tokens. They do expire, but we don't want jwt to handle that. Instead, we will expire them manually.
  return jwt.sign(user, process.env.REFRESH_SECRET_KEY)
}

/**
 * Generates a new access token using the given refresh token.
 * @param {String} refreshToken
 * @returns Access token, or undefined, in the event of a verification error.
 */
function refreshActionToken(refreshToken){
  return jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY, (err, user) => {
    if(err) return undefined
    const accessToken = generateAccessToken({name : user.name})
    return accessToken
  })
}

/**
 * Middleware used to authenticate a token.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns Status code relevant to the success or failure of the verification.
 */
function authenticateToken(req,res,next){
  // const authHeader = req.headers['authorization']
  const authHeader = req.headers.authorization

  //'authHeader &&' means that the function will either return undefined or an authorization token
  const token = authHeader && authHeader.split(' ')[1]

  if(token === null) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports = {
  refreshTokens,
  authenticateToken,
  generateAccessToken,
  generateRefreshToken,
  refreshActionToken
}
