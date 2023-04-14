const router = require("express").Router();
const { Cart, CartItem, Product } = require("../db/index").models;
const { authenticateToken } = require("./jwt");

//TODO protect route with authenticateToken
router.get("/:userId", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        userId: req.params.userId,
      },
    });

    const cartItems = await CartItem.findAll({
      where: {
        cartId: cart.id,
      },
      include: { model: Product },
    });

    res.send(cartItems);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
