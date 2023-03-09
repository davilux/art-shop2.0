const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')

//Associations will go here

module.exports = {
  db,
  models: {
    User,
    Product
  },
}
