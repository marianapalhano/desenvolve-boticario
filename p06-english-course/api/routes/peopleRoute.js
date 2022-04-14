const { Router } = require('express');
const PersonController = require('../controllers/PersonController');

const router = Router();

router.get('/pessoas', PersonController.getAll);
router.get('/pessoas/:id', PersonController.getById);
router.post('/pessoas', PersonController.create);
router.put('/pessoas/:id', PersonController.update);
router.delete('/pessoas/:id', PersonController.delete);

module.exports = router;