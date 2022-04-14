const { Router } = require('express');
const PersonController = require('../controllers/PersonController');

const router = Router();

router.get('/pessoas', PersonController.listAll);

module.exports = router;