const router = require('express').Router()
const Product = require('../db/models/Product')

//GET ALL
router.get('/', async (req, res, next) => {
  try {
    console.log('got here')
    const products = await Product.findAll()
    res.send(products)
  } catch (err) {
    next(err)
  }
})

//GET ONE
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.send(product)
  } catch (err) {
    next(err)
  }
})

module.exports = router
