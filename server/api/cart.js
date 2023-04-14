const router = require("express").Router();
const { Cart, CartItem, Product } = require("../db/index").models;
const { authenticateToken } = require("./jwt");

//TODO: AuthenticateToken currently checks to see if the provided token is valid. It does not, however, check that the token provided corresponds with the user whose cart we are attempting to access. Therefore, right now user 1 can be logged in and view carts of users 2, 3, etc.
router.get("/:userId", authenticateToken, async (req, res, next) => {
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
