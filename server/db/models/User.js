const Sequelize = require('sequelize')
const db = require('../db')

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
      isAlpha: true,
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
})

module.exports = User
