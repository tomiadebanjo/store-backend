module.exports = {
  up: queryInterface => queryInterface.bulkInsert('category', [
    {
      category_id: 1,
      department_id: 1,
      name: 'French',
      description:
          `The French have always had an eye for beauty. One look at the T-shirts below and you'll
          see that same appreciation has been applied abundantly to their postage stamps.Below are
          some of our most beautiful and colorful`
    },
    {
      category_id: 2,
      department_id: 1,
      name: 'Italian',
      description:
        `The French have always had an eye for beauty. One look at the T-shirts below and you'll
          see that same appreciation has been applied abundantly to their postage stamps.Below are
          some of our most beautiful and colorful`
    },
    {
      category_id: 3,
      department_id: 2,
      name: 'Irish',
      description:
        `The French have always had an eye for beauty. One look at the T-shirts below and you'll
          see that same appreciation has been applied abundantly to their postage stamps.Below are
          some of our most beautiful and colorful`
    },
    {
      category_id: 4,
      department_id: 3,
      name: 'Animal',
      description:
        `The French have always had an eye for beauty. One look at the T-shirts below and you'll
          see that same appreciation has been applied abundantly to their postage stamps.Below are
          some of our most beautiful and colorful`
    },
    {
      category_id: 5,
      department_id: 3,
      name: 'Flower',
      description:
        `The Flower have always had an eye for beauty. One look at the T-shirts below and you'll
          see that same appreciation has been applied abundantly to their postage stamps.Below are
          some of our most beautiful and colorful`
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('category', null, {})
};
