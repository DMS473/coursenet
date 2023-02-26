"use strict";
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = JSON.parse(fs.readFileSync("../jsons/items.json"), "utf8");
    items = items.map((item) => {
      const { id, name, type, price, stock, image } = item;
      return {
        id,
        name,
        category: type,
        price,
        stock,
        image,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    console.log(items);
    await queryInterface.bulkInsert("Items", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
