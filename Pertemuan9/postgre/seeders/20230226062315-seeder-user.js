"use strict";
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let users = JSON.parse(fs.readFileSync("../jsons/users.json"), "utf8");
    users = users.map((user) => {
      const { id, username, email, password, image } = user;
      return {
        id,
        username,
        email,
        password,
        image,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    console.log(users);
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
