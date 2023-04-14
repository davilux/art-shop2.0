const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Category = require("./models/Category");
const Order = require("./models/Order");
const Review = require("./models/Review");
const CartItem = require("./models/CartItem");
const Cart = require("./models/Cart");

//Associations:
Product.belongsToMany(Category, { through: "Product_Category" });
Category.belongsToMany(Product, { through: "Product_Category" });

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

CartItem.belongsTo(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Order,
    Review,
    CartItem,
    Cart,
  },
};
