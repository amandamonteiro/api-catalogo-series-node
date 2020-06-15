'use sctrict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },

    tipo: {
        type: String,
        require: true,
        trim: true
    },

    dataLancamento: {
        type: Date,
        required: true,
        trim: true
    },

    duracao: {
        type: String,
        required: true,
        trim: true
    },

    descricao: {
        type: String,
        required: true,
        trim: true
    },

    imagemUrl: {
        type: String,
        required: true,
        trim: true
    },

    atoresPrincipais: [{
        type: String,
        required: true,
        trim: true
    }],

    ativo: {
        type: Boolean,
        required: true,
        default: true
    }

});

module.exports = mongoose.model('CatalogoSeries', schema);