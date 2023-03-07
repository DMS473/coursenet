"use strict";

const waktu = new Date();
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // seeder table Fruits
    await queryInterface.bulkInsert(
      "Fruits",
      [
        {
          name: "Apel Indomaret",
          image: "http://via.placeholder.com/150",
          price: 10000,
          stock: 10,
          CategorieId: 1,
          BrandId: 1,
          createdAt: waktu,
          updatedAt: waktu,
        },
        {
          name: "Jeruk Indomaret",
          image: "http://via.placeholder.com/150",
          price: 13000,
          stock: 15,
          CategorieId: 2,
          BrandId: 1,
          createdAt: waktu,
          updatedAt: waktu,
        },
      ],
      {}
    );

    // seeder table Categories
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Apel",
          createdAt: waktu,
          updatedAt: waktu,
        },
        {
          name: "Jeruk",
          createdAt: waktu,
          updatedAt: waktu,
        },
      ],
      {}
    );

    // seeder table Brands
    await queryInterface.bulkInsert(
      "Brands",
      [
        {
          name: "Apel Indomaret",
          image: "http://via.placeholder.com/150",
          city: "Jakarta",
          createdAt: waktu,
          updatedAt: waktu,
        },
        {
          name: "Jeruk Indomaret",
          image: "http://via.placeholder.com/150",
          city: "Malang",
          createdAt: waktu,
          updatedAt: waktu,
        },
      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Fruits', null, {});

    await queryInterface.bulkDelete('Categoris', null, {});

    await queryInterface.bulkDelete('Brands', null, {});
  },
};
