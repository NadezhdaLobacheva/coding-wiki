const express = require("express");
const router = express.Router();
const contentController = require("../controllers/ContentController");

// Специфичные маршруты — СНАЧАЛА!
router.get("/search", contentController.searchContent);
router.get("/sortByDate", contentController.getSortedContent);

// Потом — параметры
router.get("/", contentController.getAllContents);
router.get("/:id", contentController.getContentById);
router.get("/user/:id", contentController.getContentByUserId);
router.post("/", contentController.createContent);
router.put("/:id", contentController.updateContent);
router.delete("/:id", contentController.deleteContent);

module.exports = router;
