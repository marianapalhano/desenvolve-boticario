const express = require('express');
const suppliersRouter = require('./routes/suppliers');
const productsRouter = require('./routes/products');
const db = require('./db/connection');
const tables = require('./db/tables');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api/suppliers', suppliersRouter);
app.use('/api/products', productsRouter);

db.connect((err) => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Database connected');
        tables.init(db);
        app.listen(3000, () => console.log('Server listening on port 3000'));
    }
});