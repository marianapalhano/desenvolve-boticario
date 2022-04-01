const moment = require('moment');
const conexao = require('../db/conexao');

class Atendimento {
    add(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        const atendimentoDatado = { ...atendimento, dataCriacao, data };
        const sql = 'INSERT INTO atendimentos SET ?';

        conexao.query(sql, atendimentoDatado, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
    }
}

module.exports = new Atendimento;