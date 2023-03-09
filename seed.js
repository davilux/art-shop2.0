const { db, models: { Product } } = require('./server/db');

const seed = async () => {
  await db.sync({force: true}) // clears db and matches models to tables
  console.log('db synced!')

  await Product.create({
    name : "Belay Me Sticker",
    description : "Candy heart vinyl sticker with words 'Belay Me'.",
    price : 3.99,
    quantityInStock: 5
  })
}

seed()
