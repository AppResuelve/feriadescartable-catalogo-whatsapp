'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('categories', 'is_special', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
    await queryInterface.addColumn('categories', 'special_image', {
      type: Sequelize.STRING(500),
      allowNull: true,
    });
    await queryInterface.addColumn('categories', 'special_color', {
      type: Sequelize.STRING(20),
      allowNull: true,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('categories', 'special_color');
    await queryInterface.removeColumn('categories', 'special_image');
    await queryInterface.removeColumn('categories', 'is_special');
  },
};
