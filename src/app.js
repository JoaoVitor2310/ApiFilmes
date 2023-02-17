const express = require('express');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

require('../config/db');

//JSON middleware
app.use(express.json());

//Routes
const router = require('../routes/Router');

app.use(router);

const port = process.env.PORT;

app.listen(port, async () => {
    console.log(`Servidor rodando na porta ${port}`);
})

module.exports = app;