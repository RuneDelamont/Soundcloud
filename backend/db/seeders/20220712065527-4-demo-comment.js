'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Comments', [
    {
      userId: 2,
      songId: 1,
      body: 'Deep bass, great energy.'
    },
    {
      userId: 1,
      songId: 3,
      body: 'Easy going, catchy hook.'
    },
    {
      userId: 3,
      songId: 4,
      body: 'The opening song of my workout playlist.'
    },
    {
      userId: 2,
      songId: 6,
      body: 'Makes me reminisce of Chicago'
    },
    {
      userId: 4,
      songId: 7,
      body: 'This intro is fire, introduced me to NF.'
    },
    {
      userId: 5,
      songId: 9,
      body: 'Spiritual and informative'
    },
    {
      userId: 1,
      songId: 10,
      body: `IIIIII can't be, the only... one.`
    },
    {
      userId: 2,
      songId: 15,
      body: 'Are you with me now!?'
    },
    {
      userId: 3,
      songId: 17,
      body: 'Got me looking at her in a new vibe.'
    },
    {
      userId: 1,
      songId: 18,
      body: `I'll never land!!!!`
    },
    {
      userId: 2,
      songId: 21,
      body: 'Automatic like!'
    },
   ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Comments', null, {});
  }
};
