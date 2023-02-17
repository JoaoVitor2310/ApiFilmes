const express = require('express');
const router = express();

router.use('/api/users', require('./UserRoutes'));

router.get('/', (req, res) => {
    res.statusCode(200).send('API FUNCIONANDO!');
})

module.exports = router;