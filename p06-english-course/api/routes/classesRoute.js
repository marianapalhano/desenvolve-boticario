const { Router } = require('express');
const ClassController = require('../controllers/ClassController');

const router = Router();

router.get('/turmas', ClassController.getAll);
router.get('/turmas/:id', ClassController.getById);
router.post('/turmas', ClassController.create);
router.put('/turmas/:id', ClassController.update);
router.delete('/turmas/:id', ClassController.delete);

module.exports = router;