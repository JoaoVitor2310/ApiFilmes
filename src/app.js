const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

//JSON middleware
app.use(express.json());

//Routes
const router = require('./router');

router.use('/api', router);

const port = process.env.PORT;

app.listen(port, async () => {
    console.log(`Servidor rodando na porta ${port}`);
})
// app.get('/', (req,res) => {
//     res.send('Oi');
// })

// module.exports = app;