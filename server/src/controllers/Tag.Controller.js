const tagService = require("../services/Tag.Service");

class TagController {
  static async getAllTags(req, res) {
    try {
      const tags = await tagService.getAllTags();
      res.status(200).json({ message: "Список Тегов", data: tags });
    } catch (error) {
      res.status(500).json({ message: "Ошибка сервера", error: error.message });
    }
  }

  static async getTagById(req, res) {
    try {
      const tag = await tagService.getTagById(req.params.id);
      if (!tag) {
        return res.status(404).json({ message: "Тег не найден" });
      }
      res.status(200).json({ message: "Тег найден", data: tag });
    } catch (error) {
      res.status(500).json({ message: "Ошибка сервера", error: error.message });
    }
  }

  static async createTag(req, res) {
    try {
      const tag = await tagService.createTag(req.body);
      res.status(201).json({ message: "Тег создан", data: tag });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка при создании тега", error: error.message });
    }
  }

  static async updateTag(req, res) {
    try {
      const updated = await tagService.updateTag(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ message: "Тег не найден" });
      }
      res.status(200).json({ message: "Тег обновлен", data: updated });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка при обновлении Тега", error: error.message });
    }
  }

  static async deleteTag(req, res) {
    try {
      const deleted = await tagService.deleteTag(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Тег не найдено" });
      }
      res.status(200).json({ message: "Тег удален" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка при удалении Тега", error: error.message });
    }
  }
}

module.exports = TagController;
