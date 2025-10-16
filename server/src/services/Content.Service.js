const { Content } = require("../../db/models");
const { Op, fn, col, where } = require("sequelize");

class ContentService {
  static async getAllContents() {
    return Content.findAll();
  }

  static async getContentById(id) {
    return Content.findByPk(id);
  }

  static async createContent(data) {
    return Content.create(data);
  }

  static async updateContent(id, data) {
    const content = await Content.findByPk(id);
    if (!content) return null;
    return await content.update(data);
  }

  static async deleteContent(id) {
    const content = await Content.findByPk(id);
    if (!content) return null;
    return await content.destroy();
  }

  static async getSortedByDate(order = "DESC") {
    return Content.findAll({
      order: [["createdAt", order]],
      include: ["tags"],
    });
  }

  static async searchByWord(str) {
    return Content.findAll({
      where: where(fn("LOWER", col("word")), {
        [Op.like]: `%${str.toLowerCase()}%`,
      }),
      include: ["tags"],
    });
  }
}

module.exports = ContentService;
