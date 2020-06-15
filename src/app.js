'user strict'

const express = require('express');
const bodyParser = require('body-Parser')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const index = require('./routes/index-route')
const catalogoSeries = require('./routes/catalogo-route')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/seriesEfilmes', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

app.use('/', index)
app.use('/catalogoSeries', catalogoSeries)

module.exports = app;