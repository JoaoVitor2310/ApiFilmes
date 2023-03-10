const express = require('express');
const router = express.Router();

//Controllers
const {register, login, deleteUser, getCurrentUser} = require('../controller/UserController');

//Middlewares
const validate = require('../middlewares/handleValidation');
const {userCreateValidation, loginValidation} = require('../middlewares/userValidations');
const authGuard = require('../middlewares/authGuard');

//Routes
router.post('/register', userCreateValidation(), validate, register);
router.post('/login', loginValidation(), validate, login);
router.delete('/deleteuser/:email', validate, deleteUser);
router.get('/profile', authGuard, getCurrentUser)

module.exports = router;