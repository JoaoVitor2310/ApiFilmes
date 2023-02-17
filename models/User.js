const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    topMovies: Array,
    watchList: Array,
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;