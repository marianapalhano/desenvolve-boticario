const Atendimento = require('../models/atendimentos');

module.exports = app => { 
    app.get('/atendimentos', (req, res) => res.send('Atendimentos'));

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.add(atendimento, res);
        res.send('Post de atendimento');
    });
}