const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

require('../config/db');

//JSON middleware
app.use(express.json());

//Routes
// const router = require('./router');

// router.use('/api', router);

const port = process.env.PORT;

app.listen(port, async () => {
    console.log(`Servidor rodando na porta ${port}`);
})
app.get('/', (req,res) => {
    res.statusCode(200).send('Oi');
})

module.exports = app;