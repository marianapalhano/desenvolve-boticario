const express = require('express');
const router = require('./routes/suppliers');
const db = require('./db/connection');
const tables = require('./db/tables');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api/suppliers', router);

db.connect((err) => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Database connected');
        tables.init(db);
        app.listen(3000, () => console.log('Server listening on port 3000'));
    }
});