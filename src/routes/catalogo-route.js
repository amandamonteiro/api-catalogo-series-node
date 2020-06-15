'user strict'

const express = require('express');
const route = express.Router();
const catalogoController = require('../controller/catalogo-controller');

route.post('/', catalogoController.post);
route.put('/:id', catalogoController.put);
route.delete('/:id', catalogoController.delete);
route.get('/', catalogoController.getAll);
route.get('/admin/:id', catalogoController.getById);
route.get('/:nome', catalogoController.getByName);
route.get('/:tipo', catalogoController.getByType);
route.put('/update/:id', catalogoController.put);

module.exports = route;