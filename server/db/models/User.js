const Sequelize = require('sequelize')
const db = require('../db')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 5

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      len: [1, 50],
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      //TODO: validate for alpha characters and also include ' for names such as O'Riley
      // isAlpha: true,
      len: [1, 50],
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      len: [8, 24],
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
  user.password = await bcrypt.hash(user.password, SALT_ROUNDS)
}

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)))

module.exports = User
