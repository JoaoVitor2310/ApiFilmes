import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

//JSON middleware
app.use(express.json());

//Routes
import router from './router';

router.use('/api', router);

const port = process.env.PORT;

app.listen(port, async () => {
    console.log(`Servidor rodando na porta ${port}`);
})
// app.get('/', (req,res) => {
//     res.send('Oi');
// })

// module.exports = app;