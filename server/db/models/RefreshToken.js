const Sequelize = require("sequelize");
const db = require("../db");

const RefreshToken = db.define("refreshToken", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = RefreshToken;
