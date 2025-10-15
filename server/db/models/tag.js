"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate({ Content }) {
      this.belongsToMany(Content, {
        through: 'Support',
        foreignKey: "tag_id",
        as: "contents",
      });
    }
  }
  Tag.init(
    {
      desc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
