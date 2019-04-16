module.exports = {
  up: queryInterface => queryInterface.bulkInsert('product', [
    {
      product_id: 1,
      name: 'Bags',
      description:
          'This beautiful and iconic T-shirt will no doubt lead you to your own triumph',
      price: 14.99,
      discounted_price: 0.0,
      thumbnail: 'bag-1-2'
    },
    {
      product_id: 2,
      name: 'Bags',
      description:
          'This beautiful and iconic T-shirt will no doubt lead you to your own triumph',
      price: 17.99,
      discounted_price: 0.0,
      thumbnail: 'bag-2-3'
    },
    {
      product_id: 3,
      name: 'Bags',
      description:
          'This beautiful and iconic T-shirt will no doubt lead you to your own triumph',
      price: 20.99,
      discounted_price: 0.0,
      thumbnail: 'bag-2-3'
    }
  ]),

  down: queryInterface => queryInterface.bulkDelete('product', null, {})
};
