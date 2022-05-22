const mongoose = require('mongoose');
const { Schema } = mongoose;
// var Restaurant=require("./Restaurant");

const AnimalSchema = new Schema({
    nom: {
        type: String,
        max: [30, "nom trop long"],
        required: [true, "Veuillez entrer un nom"],
    },
    categorie:{
        type: String,
        max: [30, "catégorie trop long"],
        required: [true, "Veuillez entrer une catégorie"],
    },
    description:{
        type: String,
        max: [30, "nom trop long"],
        required: [true, "Veuillez entrer un nom"],
    },
    imagePath:{
        type: String,
        max: [30, "nom trop long"],
        required: [true, "Veuillez entrer un nom"],
    },
    couleur: {
        type: String,
        max: [30, "couleur trop longue"],
        required: [true, "Veuillez entrer un nom"],
    }
});


var Animal = mongoose.model('Animal', AnimalSchema);
module.exports = { AnimalSchema, Animal };