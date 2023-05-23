const faker = require("@faker-js/faker").faker;
const {
  db,
  models: { User, Category, Product, Order, CartItem, Cart },
} = require("./server/db");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

//using an api to generate descriptions
const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const categories = await Promise.all([Category.create({ name: "All" })]);

  // Creating Users

  const users = await Promise.all([
    User.create({
      password: "admin_password",
      firstName: `Trustworthy`,
      lastName: `Administrator`,
      email: `admin@artshop.com`,
      username: `admin`,
      isAdmin: true,
    }),
    User.create({
      password: "sparkleMagic11",
      firstName: `Aesthetic`,
      lastName: `Kitten`,
      email: `aestheticKitten@vaporwavvve.com`,
      username: `Aesthetic_Kitten`,
      isAdmin: false,
    }),
    User.create({
      password: "megspass",
      firstName: `Meggy`,
      lastName: `O'Riley`,
      email: `meggy@somewhere.com`,
      username: `Meggy_O'Riley`,
      isAdmin: false,
    }),
  ]);

  let user;
  for (let i = 0; i < 10; i++) {
    user = {
      password: faker.internet.password(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      isAdmin: false,
    };
    user.email = `${user.lastName}_${user.firstName}@example.com`;
    user.username = `${user.firstName}_${user.lastName}`;

    await User.create(user);
  }

  //Creating Products
  const products = await Promise.all([
    Product.create({
      name: "Belay Me Sticker",
      description: lorem.generateSentences(10),
      quantityInStock: 2,
      photoUrl: "./img/blackheart.png",
      price: 2.99,
      category: "stickers",
    }),
    Product.create({
      name: "Belay Me Sticker2",
      description: lorem.generateSentences(10),
      quantityInStock: 2,
      photoUrl: "./img/blackheart.png",
      price: 2.99,
      category: "stickers",
    }),
    Product.create({
      name: "Belay Me Sticker3",
      description: lorem.generateSentences(10),
      quantityInStock: 2,
      photoUrl: "./img/blackheart.png",
      price: 2.99,
      category: "stickers",
    }),
    Product.create({
      name: "Belay Me Sticker4",
      description: lorem.generateSentences(10),
      quantityInStock: 2,
      photoUrl: "./img/blackheart.png",
      price: 2.99,
      category: "stickers",
    }),
    Product.create({
      name: "Belay Me Sticker5",
      description: lorem.generateSentences(10),
      quantityInStock: 2,
      photoUrl: "./img/blackheart.png",
      price: 2.99,
      category: "stickers",
    }),
    Product.create({
      name: "Belay Me Sticker6",
      description: lorem.generateSentences(10),
      quantityInStock: 0,
      photoUrl: "./img/blackheart.png",
      price: 2.99,
      category: "stickers",
    }),
    Product.create({
      name: "Belay Me Sticker7",
      description: lorem.generateSentences(10),
      quantityInStock: 0,
      photoUrl: "./img/blackheart.png",
      price: 2.99,
      category: "stickers",
    }),
    Product.create({
      name: "Belay Me Sticker8",
      description: lorem.generateSentences(10),
      quantityInStock: 2,
      photoUrl: "./img/blackheart.png",
      price: 2.99,
      category: "stickers",
    }),
  ]);

  const carts = await Promise.all([
    Cart.create({
      userId: 1,
    }),
    Cart.create({
      userId: 2,
    }),
    Cart.create({
      userId: 3,
    }),
  ]);

  const cartItems = await Promise.all([
    CartItem.create({
      cartId: 1,
      quantity: 1,
      productId: 1,
    }),
    CartItem.create({
      cartId: 1,
      quantity: 2,
      productId: 4,
    }),
    CartItem.create({
      cartId: 2,
      quantity: 1,
      productId: 1,
    }),
    CartItem.create({
      cartId: 2,
      quantity: 2,
      productId: 4,
    }),
    CartItem.create({
      cartId: 3,
      quantity: 1,
      productId: 1,
    }),
    CartItem.create({
      cartId: 3,
      quantity: 2,
      productId: 4,
    }),
  ]);

  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
