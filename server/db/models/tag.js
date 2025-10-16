const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate({ Content }) {
      this.belongsToMany(Content, {
        through: "Support",
        foreignKey: "tag_id",
        as: "contents",
      });
    }
  }
  Tag.init(
    {
      desc: DataTypes.STRING,
      wordCount: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.getDataValue("wordCount");
        },
      },
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
