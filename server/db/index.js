const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Category = require('./models/Category')
const Order = require('./models/Order')
const LineItem = require('./models/LineItem')
const Review = require('./models/Review')

//Associations:
Product.belongsToMany(Category, {through: 'Product_Category'})
Category.belongsToMany(Product, {through: 'Product_Category'})

User.hasMany(Order)
Order.belongsTo(User)
// Order.belongsToMany(Product, {through: 'Order_Product'})
// Product.belongsToMany(Order, {through: 'Order_Product'})

LineItem.belongsTo(Order)
Order.hasMany(LineItem)

LineItem.belongsTo(Product)
// TODO: Determine if this is needed... Might also want the following, but we are unsure: Product.hasMany(LineItem)

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

//TODO: Create association for RefreshToken

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Order,
    LineItem
  },
}
