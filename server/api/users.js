const router = require("express").Router();
const { User } = require("../db/index").models;
const { authenticateToken } = require("./jwt");

//GET ALL
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    next(err);
  }
});

//GET ONE
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

//Protected route, only logged in user should be able to access their account settings
//TODO: currently any logged in user can access any other user's settings. Fix this.
router.get("/:id/settings", authenticateToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
