const router = require("express").Router();
const TagController = require("../controllers/Tag.Controller");

router.get("/sortByContentCount", TagController.getTagsSorted); 

router.get("/", TagController.getAllTags);
router.get("/:id", TagController.getTagById); 
router.post("/", TagController.createTag);
router.put("/:id", TagController.updateTag);
router.delete("/:id", TagController.deleteTag);

module.exports = router;
