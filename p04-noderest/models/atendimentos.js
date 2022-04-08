const moment = require('moment');
const axios = require('axios');
const conexao = require('../db/conexao');
const repo = require('../repositories/atendimento');

class Atendimento {
    constructor() {
        // validacoes de regra de negócio
        this.dataEhValida = ({ data, dataCriacao }) => moment(data).isSameOrAfter(dataCriacao);
        this.clienteEhValido = ({ tamanho }) => tamanho >= 5;
        this.valida = params => 
            this.validacoes.filter(campo => {
                const { nome } = campo;
                const param = params[nome];
                return !campo.valido(param);
            })
        this.validacoes = [
            { 
                nome: 'data',
                valido: this.dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: this.clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ];
    }

    add(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');     
        const params = {
            data: { data, dataCriacao },
            cliente: { tamanho: atendimento.cliente.length }
        };
        const erros = this.valida(params);
        const existemErros = erros.length;
        if (existemErros) {
            return new Promise((resolve, reject) => reject(erros));
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data };
            return repo.add(atendimentoDatado)
                .then(result => {
                    const id = result.insertId
                    return { ...atendimento, id };
                });
        }
    }

    list() {
        return repo.list();
    }

    getById(id) {
        return repo.getById(id);
    }

    edit(id, values) {
        if(values.data) {
            values.data = moment(values.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        }
        return repo.edit(id, values);
    }

    delete(id) {
        return repo.delete(id);
    }
}

module.exports = new Atendimento;