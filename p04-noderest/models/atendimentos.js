const moment = require('moment');
const conexao = require('../db/conexao');

class Atendimento {
    add(atendimento, res) {
        
        const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        // validacoes de regra de negócio
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;
        const validacoes = [
            { 
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ];
        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;
        if (existemErros) {
            res.status(400).json(erros);
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data };
            const sql = 'INSERT INTO atendimentos SET ?';
    
            conexao.query(sql, atendimentoDatado, (err, res) => {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(201).json(atendimento);
                }
            });
        }
    }

    list(res) {
        const sql = 'SELECT * FROM Atendimentos';

        conexao.query(sql, (err, result) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    }

    getById(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id =${id}`;

        conexao.query(sql, (err, result) => {
            const atendimento = result[0];
            if(err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(atendimento);
            }
        });
    }
}

module.exports = new Atendimento;