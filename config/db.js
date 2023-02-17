const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const conn = async () => {
    try {
        mongoose.set('strictQuery', false); // Conserta o erro da mudança que vai ter no mongoose, ele mesmo recomendou essa linha.
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.qlkixwk.mongodb.net/?retryWrites=true&w=majority`);
        //console.log('Conectado ao banco de dados!'); DESABILITADO POR CAUSA DOS TESTES, ATIVAR DPS
        return dbConn;
    } catch (error) {
        console.log(error);
    }
}

conn();
module.exports = conn;