const { Content, Support, Tag } = require("../../db/models");
const { Op, fn, col, where } = require("sequelize");

class ContentService {
  static async getAllContents() {
    return Content.findAll({
      include: ["tags"],
    });
  }

  static async getContentById(id) {
    return Content.findByPk(id);
  }

  static async getContentByUserId(userId) {
    return Content.findAll({
      where: {
        user_id: userId,
      },
      include: ["tags"],
    });
  }

  static async createContent(data) {
    try {
      const content = await Content.create(data);

      if (data.tags && typeof data.tags === "string") {
        const tagNames = data.tags
          .split(/[\s,]+/)
          .filter((tag) => tag.trim() !== "");

        for (const tagName of tagNames) {
          const [tag] = await Tag.findOrCreate({
            where: { desc: tagName.trim() },
          });

          await content.addTags(tag, { through: "Support" });
        }
      }

      return content;
    } catch (error) {
      console.error("Error in createContent:", error);
      throw error;
    }
  }

  static async updateContent(id, data) {
    const content = await Content.findByPk(id, { include: ["tags"] });
    if (!content) return null;

    await content.update(data);

    if (data.tags && typeof data.tags === "string") {
      const tagNames = data.tags
        .split(/[\s,]+/)
        .filter((tag) => tag.trim() !== "");
      const tagInstances = [];

      for (const tagName of tagNames) {
        const [tag] = await Tag.findOrCreate({
          where: { desc: tagName.trim() },
        });
        tagInstances.push(tag);
      }

      await content.setTags(tagInstances);
    }

    // Возвращаем обновлённый контент с тегами
    return await Content.findByPk(id, { include: ["tags"] });
  }

  static async deleteContent(id) {
    try {
      await Support.destroy({
        where: { content_id: id },
      });

      const result = await Content.destroy({
        where: { id: id },
      });

      return result;
    } catch (error) {
      throw error;
    }
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
