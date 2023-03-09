const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('CART', 'ORDER'),
    defaultValue: 'CART',
    allowNull: false
  },
  creditCard: {
    type: Sequelize.INTEGER,
    validate: {
      isCreditCard: true,
    },
  },
})

module.exports = Order
