"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    static associate({ User, Tag }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsToMany(Tag, {
        through: 'Support',
        foreignKey: "content_id",
        as: "tags",
      });
    }
  }
  Content.init(
    {
      word: DataTypes.STRING,
      desc: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Content",
    }
  );
  return Content;
};

module.exports = 
