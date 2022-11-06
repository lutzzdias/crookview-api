"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("reviews", "id", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("reviews", "id", {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    });
  },
};
