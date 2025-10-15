const contentService = require("../services/Content.Service");

class ContentController {
  static async getAllContents(req, res) {
    try {
      const contents = await contentService.getAllContents();
      res.status(200).json({ message: 'Список слов', data: contents });
    } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера', error: error.message });
    }
  }

  static async getContentById(req, res) {
    try {
      const content = await contentService.getContentById(req.params.id);
      if (!content) {
        return res.status(404).json({ message: 'Слово не найдено' });
      }
      res.status(200).json({ message: 'Слово найдено', data: content });
    } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера', error: error.message });
    }
  }

  static async createContent(req, res) {
    try {
      const content = await contentService.createContent(req.body);
      res.status(201).json({ message: 'Слово создано', data: content });
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при создании слова', error: error.message });
    }
  }

  static async updateContent(req, res) {
    try {
      const updated = await contentService.updateContent(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ message: 'Слово не найдено' });
      }
      res.status(200).json({ message: 'Слово обновлено', data: updated });
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при обновлении слова', error: error.message });
    }
  }

  static async deleteContent(req, res) {
    try {
      const deleted = await contentService.deleteContent(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: 'Слово не найдено' });
      }
      res.status(200).json({ message: 'Слово удалено' });
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при удалении слова', error: error.message });
    }
  }
}

module.exports = ContentController;
