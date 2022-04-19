const { Router } = require('express');
const LevelController = require('../controllers/LevelController');

const router = Router();

router.get('/niveis', LevelController.getAll);
router.get('/niveis/:id', LevelController.getById);
router.post('/niveis', LevelController.create);
router.put('/niveis/:id', LevelController.update);
router.delete('/niveis/:id', LevelController.delete);

module.exports = router;