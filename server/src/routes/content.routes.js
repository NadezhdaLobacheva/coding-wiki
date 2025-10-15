const express = require('express');
const router = express.Router();
const contentController = require('../controllers/Content.Controller');

router.get('/', contentController.getAllContents); 
router.get('/:id', contentController.getContentById); 
router.post('/', contentController.createContent); 
router.put('/:id', contentController.updateContent); 
router.delete('/:id', contentController.deleteContent);

module.exports = router;
