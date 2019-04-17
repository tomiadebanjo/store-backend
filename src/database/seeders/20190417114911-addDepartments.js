module.exports = {
  up: queryInterface => queryInterface.bulkInsert('department', [
    {
      department_id: 1,
      name: 'Regional',
      description:
        'This beautiful and iconic T-shirt will no doubt lead you to your own triumph',
    },
    {
      department_id: 2,
      name: 'Nature',
      description:
        'Find beautiful T-shirts with animals and flowers in our Nature department!',
    },
    {
      department_id: 3,
      name: 'Seasonal',
      description:
        'Proud of your country? Wear a T-shirt with a national symbol stamp!',
    },
    {
      department_id: 4,
      name: 'Fashion',
      description:
        'This beautiful and iconic T-shirt will no doubt lead you to your own triumph',
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('department', null, {})
};
