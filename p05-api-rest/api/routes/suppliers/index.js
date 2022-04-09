const router = require('express').Router();
const Supplier = require('../../models/suppliers');

router.get('/', (req, res) => {
    Supplier.list()
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    Supplier.getById(id)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});

router.post('/', (req, res) => {
    const data = req.body;
    Supplier.add(data)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(400).json(err));
});

router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;
    Supplier.edit(id, values)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    Supplier.delete(id)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});

module.exports = router;