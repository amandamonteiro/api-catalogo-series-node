'use strict'

const CatalogoSeries = require('../model/catalogo')

exports.create = async(body) => {
    var filmeSerie = new CatalogoSeries(body);
    await filmeSerie.save();

}

exports.update = async(id, catalogo) => {
    await CatalogoSeries
        .findByIdAndUpdate(id, {
            $set: {
                nome: catalogo.nome,
                dataLancamento: catalogo.dataLancamento,
                descricao: catalogo.descricao,
                imagemUrl: catalogo.imagemUrl,
                atoresPrincipais: catalogo.atoresPrincipais,
                ativo: catalogo.ativo

            }
        })
}

exports.getAll = async() => {
    const res = await CatalogoSeries.find({
        ativo: true
    });
    return res;
}

exports.getById = async(id) => {
    const res = await CatalogoSeries
        .findById(id)
    return res
}

exports.getByName = async(nome) => {
    const res = await CatalogoSeries
        .findOne({
            nome: nome
        });
    return res
}

exports.getByType = async(tipo) => {
    const res = await CatalogoSeries
        .find({
            tipo: tipo
        });
    return res
}

exports.delete = async(id) => {
    await CatalogoSeries
        .findOneAndRemove(id)
}