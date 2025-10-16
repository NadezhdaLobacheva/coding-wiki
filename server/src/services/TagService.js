const { Tag, Content, Sequelize } = require("../../db/models");

class TagService {
  static async getAllTags() {
    return Tag.findAll();
  }

  static async getTagById(id) {
    return Tag.findByPk(id);
  }

  static async createTag(data) {
    return Tag.create(data);
  }

  static async updateTag(id, data) {
    const tag = await Tag.findByPk(id);
    if (!tag) return null;
    return await tag.update(data);
  }

  static async deleteTag(id) {
    const tag = await Tag.findByPk(id);
    if (!tag) return null;
    return await tag.destroy();
  }

  static async getTagsSortedByContentCount(order = "DESC") {
    return Tag.findAll({
      attributes: {
        include: [
          [Sequelize.fn("COUNT", Sequelize.col("contents.id")), "wordCount"],
        ],
      },
      include: [
        {
          model: Content,
          as: "contents",
          attributes: [],
          through: { attributes: [] },
        },
      ],
      group: ["Tag.id", "Tag.desc", "Tag.createdAt", "Tag.updatedAt"],
      order: [[Sequelize.col("wordCount"), order]],
    });
  }
}

module.exports = TagService;
