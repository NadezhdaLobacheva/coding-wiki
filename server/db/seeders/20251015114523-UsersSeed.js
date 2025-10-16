"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Jane",
          email: "jane@mail.ru",
          password: await bcrypt.hash("123456", 10),
          isAdmin: false,
        },
         {
          name: "Admin",
          email: "isadmin@mail.ru",
          password: await bcrypt.hash("isAdmin123!", 10),
          isAdmin: true,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Contents",
      [
        {
          user_id: 2,
          word: "Salsify Taro Catsear Garlic kohlrabi",
          desc: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette kohlrabi tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          word: "Kohlrabi Radish Okra Azuki",
          desc: "Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          word: "Lotus Root Water Spinach",
          desc: "Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Tags",
      [
        {
          desc: "#recursion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "#classes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "#asyncAwait",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Supports",
      [
        {
          tag_id: 1,
          content_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 2,
          content_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 3,
          content_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contents", null, {});
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Tags", null, {});
    await queryInterface.bulkDelete("Supports", null, {});
  },
};
