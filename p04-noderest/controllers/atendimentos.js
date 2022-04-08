const Atendimento = require('../models/atendimentos');

module.exports = app => { 
    app.get('/atendimentos', (req, res) => {
        Atendimento.list()
            .then(result => res.json(result)) // status 200 é o padrão
            .catch(err => res.status(400).json(err));
    });

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.getById(id)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err));
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.add(atendimento)
            .then(atendimentoCadastrado => 
                res.status(201).json(atendimentoCadastrado))
            .catch(err => 
                res.status(400).json(err));
    });

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        Atendimento.edit(id, values)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err));
    });

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Atendimento.delete(id)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err));
    })
}