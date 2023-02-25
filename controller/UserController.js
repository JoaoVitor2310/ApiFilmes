const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const generateToken = id => {
    return jwt.sign({id}, jwtSecret, {
        expiresIn: '7d',
    })
}

const register = async(req, res) => {
    // let time = Date.now();
    // let email = `${time}@gmail.com`;
    email = 'Ajoaovitormatosgouveia@gmail.com'
    res.send({email});
}

module.exports = {
    register,
}