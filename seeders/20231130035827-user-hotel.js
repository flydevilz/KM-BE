'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [{
      Name: 'John Doe',
      email : 'johndoe123@email.com',
      Password : '123'
      },
      
      {
      Name: 'John Doe',
      email : 'johndoe123@email.com',
      Password : '123'
      },

      {
        Name: 'John Doe',
        email : 'johndoe123@email.com',
        Password : '123'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
