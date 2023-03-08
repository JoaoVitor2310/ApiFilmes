const express = require('express');
const router = express.Router();

//Controllers
const {register, login, deleteUser} = require('../controller/UserController');

//Middlewares
const validate = require('../middlewares/handleValidation');
const {userCreateValidation, loginValidation} = require('../middlewares/userValidations');

//Routes
router.post('/register', userCreateValidation(), validate, register);
router.post('/login', loginValidation(), validate, login);
router.delete('/deleteuser/:email', validate, deleteUser);

module.exports = router;