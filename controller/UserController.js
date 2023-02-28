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
    const {name, email, password} = req.body;
    const user = User.findOne({email});
    if(user){
        res.status(422).json({errors: ['Por favor, utilize outro email.']});
        return;
    }

    email = 'joaovitormatosgouveia@gmail.com'
    res.json({email});
}

module.exports = {
    register,
}