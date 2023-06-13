const faker = require("@faker-js/faker").faker;
const {
  db,
  models: { User, Category, Product, Order, CartItem, Cart },
} = require("./server/db");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const categoriesData = [
  { name: "Jewelry", description: "Unique handmade jewelry pieces" },
  { name: "Clothing", description: "Fashionable clothing for all occasions" },
  {
    name: "Accessories",
    description: "Stylish accessories to complement your look",
  },
  {
    name: "Prints",
    description: "High-quality prints of paintings and drawings",
  },
  {
    name: "Home Decor",
    description: "Artistic home decor items for a stylish space",
  },
];

const productsData = [
  {
    name: "Silver Moonstone Necklace",
    description:
      "A delicate necklace featuring a moonstone pendant on a sterling silver chain.",
    quantityInStock: 5,
    photoUrl: "./img/blackheart.png",
    price: 49.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Floral Print Dress",
    description:
      "A beautiful floral print dress with a fitted waist and flowing skirt.",
    quantityInStock: 3,
    photoUrl: "./img/blackheart.png",
    price: 89.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Leather Crossbody Bag",
    description:
      "A versatile leather crossbody bag with multiple compartments and an adjustable strap.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 69.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Abstract Art Print",
    description:
      "An abstract art print showcasing vibrant colors and dynamic shapes.",
    quantityInStock: 8,
    photoUrl: "./img/blackheart.png",
    price: 29.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Handwoven Macrame Wall Hanging",
    description:
      "A handwoven macrame wall hanging made with natural cotton fibers.",
    quantityInStock: 6,
    photoUrl: "./img/blackheart.png",
    price: 79.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Rose Gold Dangle Earrings",
    description:
      "Elegant rose gold dangle earrings with intricate filigree patterns.",
    quantityInStock: 12,
    photoUrl: "./img/blackheart.png",
    price: 59.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Striped Linen Blouse",
    description:
      "A lightweight striped linen blouse with a relaxed fit and button-down front.",
    quantityInStock: 7,
    photoUrl: "./img/blackheart.png",
    price: 69.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Leather Wallet with RFID Protection",
    description:
      "A stylish leather wallet with RFID blocking technology to protect your cards.",
    quantityInStock: 15,
    photoUrl: "./img/blackheart.png",
    price: 39.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Landscape Oil Painting",
    description:
      "A breathtaking landscape oil painting capturing the beauty of nature.",
    quantityInStock: 5,
    photoUrl: "./img/blackheart.png",
    price: 199.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Ceramic Plant Pot with Geometric Patterns",
    description:
      "A ceramic plant pot featuring eye-catching geometric patterns, perfect for indoor plants.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 34.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Sterling Silver Bracelet with Gemstone Charms",
    description:
      "A stunning sterling silver bracelet adorned with gemstone charms for a touch of elegance.",
    quantityInStock: 9,
    photoUrl: "./img/blackheart.png",
    price: 79.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Embroidered Denim Jacket",
    description:
      "A trendy embroidered denim jacket with unique floral designs for a boho-chic look.",
    quantityInStock: 4,
    photoUrl: "./img/blackheart.png",
    price: 109.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Handcrafted Leather Keychain",
    description:
      "A handcrafted leather keychain with personalized initials, a stylish accessory for your keys.",
    quantityInStock: 20,
    photoUrl: "./img/blackheart.png",
    price: 19.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Gemstone Pendant Necklace",
    description:
      "A stunning pendant necklace featuring a natural gemstone of your choice on a delicate chain.",
    quantityInStock: 8,
    photoUrl: "./img/blackheart.png",
    price: 79.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Bohemian Maxi Dress",
    description:
      "A bohemian-inspired maxi dress with intricate embroidery and flowing silhouette.",
    quantityInStock: 5,
    photoUrl: "./img/blackheart.png",
    price: 109.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Leather Tote Bag",
    description:
      "A spacious leather tote bag with multiple compartments and sturdy handles for everyday use.",
    quantityInStock: 12,
    photoUrl: "./img/blackheart.png",
    price: 89.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Abstract Watercolor Print",
    description:
      "A captivating abstract watercolor print that adds a pop of color to any space.",
    quantityInStock: 7,
    photoUrl: "./img/blackheart.png",
    price: 39.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Handmade Ceramic Vase",
    description:
      "A handcrafted ceramic vase with a unique shape and glazed finish, perfect for displaying flowers.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 49.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Dainty Birthstone Ring",
    description:
      "A dainty sterling silver ring with a birthstone of your choice, a meaningful gift for any occasion.",
    quantityInStock: 15,
    photoUrl: "./img/blackheart.png",
    price: 59.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Striped Linen Shorts",
    description:
      "Comfortable and stylish striped linen shorts for a casual summer look.",
    quantityInStock: 9,
    photoUrl: "./img/blackheart.png",
    price: 69.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Handwoven Straw Hat",
    description:
      "A handwoven straw hat with a wide brim, perfect for sun protection during outdoor activities.",
    quantityInStock: 6,
    photoUrl: "./img/blackheart.png",
    price: 29.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Botanical Illustration Print Set",
    description:
      "A set of botanical illustration prints showcasing different plant species, ideal for nature lovers.",
    quantityInStock: 8,
    photoUrl: "./img/blackheart.png",
    price: 24.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Hand-Painted Wooden Coasters",
    description:
      "A set of hand-painted wooden coasters with intricate designs, adding a touch of art to your table.",
    quantityInStock: 11,
    photoUrl: "./img/blackheart.png",
    price: 19.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Minimalist Geometric Earrings",
    description:
      "A pair of minimalist geometric earrings crafted with stainless steel for a modern and sleek look.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 34.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Handcrafted Leather Wallet",
    description:
      "A handcrafted leather wallet with multiple card slots and a slim design, perfect for everyday use.",
    quantityInStock: 15,
    photoUrl: "./img/blackheart.png",
    price: 49.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Nature-Inspired Landscape Print",
    description:
      "A captivating landscape print inspired by the beauty of nature, showcasing serene scenery and vibrant colors.",
    quantityInStock: 8,
    photoUrl: "./img/blackheart.png",
    price: 59.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Handmade Ceramic Planter",
    description:
      "A handmade ceramic planter with a unique texture and glaze, adding a touch of elegance to your plant collection.",
    quantityInStock: 12,
    photoUrl: "./img/blackheart.png",
    price: 39.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Engraved Silver Bracelet",
    description:
      "A sterling silver bracelet with an engraved inspirational quote, a meaningful accessory for daily wear.",
    quantityInStock: 7,
    photoUrl: "./img/blackheart.png",
    price: 79.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Straw Floppy Sun Hat",
    description:
      "A stylish straw floppy sun hat with a wide brim and a chic ribbon detail, perfect for sunny days.",
    quantityInStock: 9,
    photoUrl: "./img/blackheart.png",
    price: 29.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Hand-Painted Ceramic Mug Set",
    description:
      "A set of hand-painted ceramic mugs featuring intricate designs inspired by nature, perfect for enjoying your favorite hot beverages.",
    quantityInStock: 8,
    photoUrl: "./img/blackheart.png",
    price: 39.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Handcrafted Leather Journal",
    description:
      "A beautifully handcrafted leather journal with blank pages for your creative ideas and thoughts.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 49.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Diamond Stud Earrings",
    description:
      "Classic and timeless diamond stud earrings, perfect for adding a touch of elegance to any outfit.",
    quantityInStock: 5,
    photoUrl: "./img/blackheart.png",
    price: 299.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Embroidered Cotton Shirt",
    description:
      "A stylish embroidered cotton shirt with intricate patterns and a comfortable fit.",
    quantityInStock: 8,
    photoUrl: "./img/blackheart.png",
    price: 79.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Leather Passport Holder",
    description:
      "A sleek and compact leather passport holder to keep your travel documents organized and secure.",
    quantityInStock: 15,
    photoUrl: "./img/blackheart.png",
    price: 29.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Abstract Sculpture",
    description:
      "An abstract sculpture made from metal and wood, showcasing unique shapes and textures.",
    quantityInStock: 6,
    photoUrl: "./img/blackheart.png",
    price: 149.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Handmade Ceramic Plate Set",
    description:
      "A set of handmade ceramic plates with hand-painted designs, perfect for serving appetizers and desserts.",
    quantityInStock: 12,
    photoUrl: "./img/blackheart.png",
    price: 59.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Gold Hoop Earrings",
    description:
      "Classic gold hoop earrings with a polished finish, suitable for any occasion.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 49.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Knit Sweater",
    description:
      "A cozy and warm knit sweater with a relaxed fit and a stylish design.",
    quantityInStock: 7,
    photoUrl: "./img/blackheart.png",
    price: 89.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Leather Belt",
    description:
      "A classic leather belt with a buckle closure, perfect for adding a finishing touch to your outfits.",
    quantityInStock: 15,
    photoUrl: "./img/blackheart.png",
    price: 39.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Abstract Metal Wall Art",
    description:
      "An abstract metal wall art piece with geometric shapes and a modern design, ideal for contemporary spaces.",
    quantityInStock: 8,
    photoUrl: "./img/blackheart.png",
    price: 199.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Handcrafted Leather Bracelet",
    description:
      "A handcrafted leather bracelet with a unique design, adding a touch of rugged elegance to your style.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 29.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Canvas Backpack",
    description:
      "A durable canvas backpack with multiple compartments, ideal for carrying your essentials while on the go.",
    quantityInStock: 5,
    photoUrl: "./img/blackheart.png",
    price: 59.99,
    categoryId: 2, // Bags category ID
  },
  {
    name: "Canvas Tote Bag",
    description:
      "A versatile canvas tote bag with sturdy handles and a spacious interior, perfect for everyday use.",
    quantityInStock: 12,
    photoUrl: "./img/blackheart.png",
    price: 39.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Modern Abstract Painting",
    description:
      "A modern abstract painting that adds a contemporary touch to your living space.",
    quantityInStock: 6,
    photoUrl: "./img/blackheart.png",
    price: 199.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Scented Candle Set",
    description:
      "A set of scented candles with relaxing aromas, creating a cozy atmosphere in your home.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 34.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Sterling Silver Hoop Earrings",
    description:
      "Classic sterling silver hoop earrings with a polished finish, suitable for any occasion.",
    quantityInStock: 9,
    photoUrl: "./img/blackheart.png",
    price: 69.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Striped Linen Jumpsuit",
    description:
      "A stylish striped linen jumpsuit with a relaxed fit and adjustable straps, perfect for summer days.",
    quantityInStock: 4,
    photoUrl: "./img/blackheart.png",
    price: 109.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Leather Passport Wallet",
    description:
      "A stylish and functional leather wallet designed to hold your passport, cards, and travel documents.",
    quantityInStock: 20,
    photoUrl: "./img/blackheart.png",
    price: 39.99,
    categoryId: 2, // Travel Accessories category ID
  },
  {
    name: "Vintage Polaroid Camera",
    description:
      "Capture moments with a touch of nostalgia using this vintage-inspired Polaroid camera.",
    quantityInStock: 3,
    photoUrl: "./img/blackheart.png",
    price: 79.99,
    categoryId: 3, // Electronics category ID
  },
  {
    name: "Handwoven Straw Tote",
    description:
      "A chic and eco-friendly handwoven straw tote bag, perfect for a day at the beach or a casual outing.",
    quantityInStock: 15,
    photoUrl: "./img/blackheart.png",
    price: 59.99,
    categoryId: 4, // Bags category ID
  },
  {
    name: "Gemstone Stud Earrings",
    description:
      "Elegant gemstone stud earrings featuring a variety of natural gemstones in a simple and timeless design.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 69.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Embroidered Midi Skirt",
    description:
      "A stylish embroidered midi skirt with intricate floral patterns and a flattering A-line silhouette.",
    quantityInStock: 6,
    photoUrl: "./img/blackheart.png",
    price: 79.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Leather Watch Box",
    description:
      "A luxurious leather watch box with multiple compartments and a glass display top, perfect for organizing and showcasing your watch collection.",
    quantityInStock: 15,
    photoUrl: "./img/blackheart.png",
    price: 129.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Abstract Acrylic Painting",
    description:
      "An abstract acrylic painting created with vibrant colors and bold brushstrokes, adding a modern touch to any space.",
    quantityInStock: 8,
    photoUrl: "./img/blackheart.png",
    price: 199.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Handwoven Hammock",
    description:
      "A handwoven hammock made from soft cotton fibers, providing a comfortable and relaxing spot for outdoor lounging.",
    quantityInStock: 6,
    photoUrl: "./img/blackheart.png",
    price: 99.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Sterling Silver Necklace with Birthstone Pendant",
    description:
      "A sterling silver necklace featuring a delicate birthstone pendant, a personalized and meaningful gift for yourself or a loved one.",
    quantityInStock: 12,
    photoUrl: "./img/blackheart.png",
    price: 89.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Embroidered Denim Skirt",
    description:
      "A trendy embroidered denim skirt with intricate floral designs and a flattering high-waisted silhouette.",
    quantityInStock: 4,
    photoUrl: "./img/blackheart.png",
    price: 99.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Modern Geometric Wall Clock",
    description:
      "A modern geometric wall clock with a minimalist design, adding a stylish and functional element to any room.",
    quantityInStock: 8,
    photoUrl: "./img/blackheart.png",
    price: 49.99,
    categoryId: 5, // Home Decor category ID
  },
  {
    name: "Silver Bangle Bracelet",
    description:
      "A sleek and polished silver bangle bracelet that effortlessly complements any outfit, suitable for everyday wear.",
    quantityInStock: 15,
    photoUrl: "./img/blackheart.png",
    price: 59.99,
    categoryId: 1, // Jewelry category ID
  },
  {
    name: "Knitted Wool Sweater",
    description:
      "A cozy knitted wool sweater with a relaxed fit and warm fabric, perfect for chilly days and comfortable layering.",
    quantityInStock: 10,
    photoUrl: "./img/blackheart.png",
    price: 79.99,
    categoryId: 2, // Clothing category ID
  },
  {
    name: "Botanical Print Set",
    description:
      "A set of botanical prints showcasing various plant species, adding a touch of nature to your home or office decor.",
    quantityInStock: 6,
    photoUrl: "./img/blackheart.png",
    price: 59.99,
    categoryId: 4, // Prints category ID
  },
  {
    name: "Leather Card Holder",
    description:
      "A compact leather card holder with multiple card slots, perfect for organizing your essential cards while keeping a slim profile.",
    quantityInStock: 20,
    photoUrl: "./img/blackheart.png",
    price: 24.99,
    categoryId: 3, // Accessories category ID
  },
  {
    name: "Silk Scarf",
    description:
      "Wrap yourself in luxury with this exquisite silk scarf, featuring a vibrant print and a soft, lightweight feel.",
    quantityInStock: 20,
    photoUrl: "./img/blackheart.png",
    price: 49.99,
    categoryId: 3, // Clothing category ID
  },
];

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const categories = await Category.bulkCreate(categoriesData);

  const users = await Promise.all([
    User.create({
      password: "admin_password",
      firstName: "Trustworthy",
      lastName: "Administrator",
      email: "admin@artshop.com",
      username: "admin",
      isAdmin: true,
    }),
    User.create({
      password: "sparkleMagic11",
      firstName: "Aesthetic",
      lastName: "Kitten",
      email: "aestheticKitten@vaporwavvve.com",
      username: "Aesthetic_Kitten",
      isAdmin: false,
    }),
    User.create({
      password: "megspass",
      firstName: "Meggy",
      lastName: "O'Riley",
      email: "meggy@somewhere.com",
      username: "Meggy_O'Riley",
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

  const products = await Product.bulkCreate(productsData);

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

if (module === require.main) {
  runSeed();
}

module.exports = seed;
