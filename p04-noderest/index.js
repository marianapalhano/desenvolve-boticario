const customExpress = require('./config/customExpress');
const db = require('./db/conexao');
const tables = require('./db/tables');

db.connect((err) => {
    if (err) {
        console.log('Erro: ', err);
    } else {
        console.log('Database connected');
        tables.init(db);
        const app = customExpress();
        app.listen(3000, () => console.log('server listening on port 3000'));
    }
});