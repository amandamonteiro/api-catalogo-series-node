'use strict'

const CatalogoSeries = require('../model/catalogo');
const repository = require('../repositories/catalogo-repository');

exports.post = async(req, res, next) => {

    if (req.body.imagemUrl.substr(-3) == "jpg" || req.body.imagemUrl.substr(-3) == "png") {
        try {
            await repository
                .create(req.body);
            res.status(201).send({
                message: 'Filme/Série cadastrado com sucesso!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao cadastrar Filme/Série! ',
                data: (e)
            });
        }
    } else {
        res.status(500).send({
            message: 'Extenção não permitida!'

        });
    }

};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: "Informações atualizadas com sucesso! "
        });
    } catch (e) {
        res.status(500).send({
            message: "Falha ao atualizar as informações.",
            data: (e)
        });
    }
}

exports.getAll = async(req, res, next) => {
    try {
        var filmesEseries = await repository.getAll();
        res.status(200).send(filmesEseries);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao listar todos os filmes e séries. ',
            data: (e)
        })
    }
}

exports.getById = async(req, res, next) => {

    try {
        var filmesEseries = await repository.getById(req.params.id);
        res.status(200).send(filmesEseries);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar filmes e séries por ID! '
        });
    }

}

exports.getByName = async(req, res, next) => {
    try {
        var filmesEseries = await repository.getByName(req.params.nome);
        res.status(200).send(filmesEseries);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar filmes e séries por nome! ',
            data: (e)
        })
    }

}

exports.getByType = async(req, res, next) => {
    try {
        var filmesEseries = await repository.getByType(req.params.tipo);
        res.status(200).send(filmesEseries);

    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar filmes e séries por tipo! ',
            data: (e)
        })
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: "Filme/Série removido com sucesso! "
        });
    } catch (e) {
        res.status(400).send({
            message: "Falha ao remover filme/série. ",
            data: (e)
        });
    }
}