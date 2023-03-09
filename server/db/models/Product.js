const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  quantityInStock: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue : 0,
  },
  photoUrl: {
    type: Sequelize.TEXT,
    defaultValue : 'img/blackheart.png'
  },
})

module.exports = Product
