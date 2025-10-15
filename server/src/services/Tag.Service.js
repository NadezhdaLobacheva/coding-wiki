const { Tag } = require("../../db/models");

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
}

module.exports = TagService;
