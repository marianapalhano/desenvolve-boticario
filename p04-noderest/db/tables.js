class Tables {
    init(conexao) {
        this.conexao = conexao;
        console.log('Tabelas chamadas');
        this.criarAtendimentos();
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50), pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))';
        this.conexao.query(sql, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Tabela atendimento criada com sucesso');
            }
        });
    }
}

module.exports = new Tables;