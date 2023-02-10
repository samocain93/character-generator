const { Class } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  }
]
const seedClasses = () => Class.bulkCreate(productData);

module.exports = seedClasses;
