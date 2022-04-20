const { Router } = require('express');
const PersonController = require('../controllers/PersonController');

const router = Router();

router.get('/pessoas', PersonController.getAll);
router.get('/pessoas/:id', PersonController.getById);
router.post('/pessoas', PersonController.create);
router.put('/pessoas/:id', PersonController.update);
router.delete('/pessoas/:id', PersonController.delete);

router.get('/pessoas/:studentId/matricula/:enrollmentId', PersonController.getEnrollmentById);
router.post('/pessoas/:studentId/matricula', PersonController.createEnrollment);
router.put('/pessoas/:studentId/matricula/:enrollmentId', PersonController.updateEnrollment);
router.delete('/pessoas/:studentId/matricula/:enrollmentId', PersonController.deleteEnrollment);

module.exports = router;