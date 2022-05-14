const mongoose = require('mongoose');
const { Schema } = mongoose;
// var Restaurant=require("./Restaurant");

const UserSchema = new Schema({
    alias: {
        type: String,
        max: [30, "nom trop long"],
        required: [true, "Veuillez entrer un nom"],
    },
    mdp: {
        type: String,
        min: [2, "mot de passe trop court"],
        max: [30, "mot de passe trop long"],
        required: [true, "Veuillez entrer un mot de passe"]
    },
    email: {
        type: String,
        validate: [String, 'invalid email'],
        required: [true, "Veuillez entrer une adresse email"]
    },
});


var User = mongoose.model('User', UserSchema);
module.exports = { UserSchema, User };