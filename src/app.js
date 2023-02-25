const express = require('express');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

require('../config/db');

//JSON middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
const router = require('../routes/Router');
app.use(router);

module.exports = app;