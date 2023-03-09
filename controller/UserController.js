const User = require('../models/User');
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {
        expiresIn: '7d',
    })
}

const register = async(req, res) => {
    const {name, email, password} = req.body;
    
    const user = await User.findOne({email});

    if(user){
        res.status(422).json({errors: ['Por favor, utilize outro email.']});
        return;
    }
    
    // Generate hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    if(!newUser){
        res.status(422).json({errors: ['Houve um erro, tente novamente mais tarde.']})
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id),
    })

}

const login = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        res.status(422).json({errors: ['Usuário não encontrado.']});
        return;
    }

    //Check if pawword matches
    if(!(await bcrypt.compare(password, user.password))){
        res.status(422).json({errors: ['Senha inválida.']});
        return;
    }

    res.status(200).json({
        _id: user._id,
        token: generateToken(user._id),
    })
    // res.send('Login')
}

//DeleteUser is useful for the tests
const deleteUser = async(req, res) => {
    const { email } = req.params;
    
    const user = await User.findOne({email});

    if(user){
        await User.deleteOne({email});
        res.send("Usuário deletado");
        return;
    }
}

module.exports = {
    register,
    login,
    deleteUser
}