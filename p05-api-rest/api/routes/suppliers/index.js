const router = require('express').Router();
const Supplier = require('../../models/suppliers');

router.use('/', (req, res) => {
    Supplier.list()
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});

module.exports = router;