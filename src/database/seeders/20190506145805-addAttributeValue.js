module.exports = {
  up: queryInterface => queryInterface.bulkInsert('attribute_value', [
    {
      attribute_id: 1,
      value: 'S'
    },
    {
      attribute_id: 1,
      value: 'M'
    },
    {
      attribute_id: 1,
      value: 'L'
    },
    {
      attribute_id: 1,
      value: 'XL'
    },
    {
      attribute_id: 1,
      value: 'XXL'
    },
    {
      attribute_id: 2,
      value: 'White'
    },
    {
      attribute_id: 2,
      value: 'Black'
    },
    {
      attribute_id: 2,
      value: 'Red'
    },
    {
      attribute_id: 2,
      value: 'Orange'
    },
    {
      attribute_id: 2,
      value: 'Yellow'
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('attribute_value', null, {})
};
