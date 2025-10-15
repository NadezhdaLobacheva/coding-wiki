const { Content } = require("../../db/models");

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
}

module.exports = ContentService;
