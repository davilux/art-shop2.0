const Sequelize = require("sequelize");
const db = require("../db");

const Review = db.define("review", {
  reviewText: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      max: 5,
      min: 0
    }
  }
});

module.exports = Review;
