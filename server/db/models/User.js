const Sequelize = require('sequelize')
const db = require('../db')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 5

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    //TODO: Use regex for validation. Only allow certain characters
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 150],
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 150],
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      len: [8, 20]
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  refreshToken : {
    type: Sequelize.STRING,
    defaultValue : ""
  }
})

// HASHING HOOK
const hashPassword = async (user) => {
  //This check prevents an already hashed password from being re-hashed
  if (user.changed('password')){
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS)
  }
}

const convertNameToLower = (user) => {
  user.username = user.username.toLowerCase()
}

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)))

User.beforeCreate(convertNameToLower)
User.beforeBulkCreate(convertNameToLower)
User.beforeUpdate(convertNameToLower)

module.exports = User
