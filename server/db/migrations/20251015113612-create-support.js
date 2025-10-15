"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Supports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tag_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tags", // явно указываем модель
          key: "id",
        },
      },
      content_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contents", // явно указываем модель
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Supports");
  },
};
