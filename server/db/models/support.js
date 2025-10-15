"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Support extends Model {
    static associate({ Tag, Content }) {
      this.belongsTo(Tag, {
        foreignKey: "tag_id",
        as: "tag",
      });

      // Support принадлежит Content
      this.belongsTo(Content, {
        foreignKey: "content_id",
        as: "content",
      });
    }
  }
  Support.init(
    {
      tag_id: DataTypes.INTEGER,
      content_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Support",
    }
  );
  return Support;
};
