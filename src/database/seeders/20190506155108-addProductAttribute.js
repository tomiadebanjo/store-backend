module.exports = {
  up: queryInterface => queryInterface.bulkInsert('product_attribute', [
    {
      product_id: 1,
      attribute_value_id: 1,
    },
    {
      product_id: 1,
      attribute_value_id: 2,
    },
    {
      product_id: 1,
      attribute_value_id: 3,
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('product_attribute', null, {})
};
