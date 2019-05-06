module.exports = {
  up: queryInterface => queryInterface.bulkInsert('attribute', [
    {
      name: 'Size'
    },
    {
      name: 'Color'
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('attribute', null, {})
};
