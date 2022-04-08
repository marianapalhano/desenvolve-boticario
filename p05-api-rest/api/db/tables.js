class Tables {
    init(db) {
        this.db = db;
        console.log('Tabelas chamadas');
        this.createSuppliers();
    }

    createSuppliers() {
        const sql = 'CREATE TABLE IF NOT EXISTS suppliers (id int NOT NULL AUTO_INCREMENT, company varchar(30), email varchar(30), category varchar(20), created_at datetime NOT NULL, updated_at datetime NOT NULL, PRIMARY KEY(id))';
        this.db.query(sql, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Suppliers table successfully created');
            }
        });
    }
}

module.exports = new Tables;