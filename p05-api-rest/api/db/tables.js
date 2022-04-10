class Tables {
    init(db) {
        this.db = db;
        console.log('Tabelas chamadas');
        this.createSuppliers();
        this.createProducts();
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

    createProducts() {
        const sql = 'CREATE TABLE IF NOT EXISTS products (id int NOT NULL AUTO_INCREMENT, name varchar(30) NOT NULL, price double NOT NULL, stack int, supplier_id int NOT NULL, FOREIGN KEY(supplier_id) REFERENCES suppliers(id), PRIMARY KEY(id))';
        this.db.query(sql, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Products table successfully created');
            }
        });
    }
}

module.exports = new Tables;