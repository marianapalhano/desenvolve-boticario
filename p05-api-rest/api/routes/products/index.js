const router = require('express').Router();
const Product = require('../../models/products');

router.get('/', (req, res) => {
    Product.list()
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    Product.getById(id)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});

router.post('/', (req, res) => {
    const data = req.body;
    Product.add(data)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(400).json(err));
});

router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;
    Product.edit(id, values)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    Product.delete(id)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
});

module.exports = router;