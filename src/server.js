//Importante separar o server do app por causa do jest que dá erro.
const app = require('./app');
const PORT = process.env.PORT;

// conn = require('../config/db');
// conn();

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    // conn();
});