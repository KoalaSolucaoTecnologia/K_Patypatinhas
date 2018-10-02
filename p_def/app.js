'use strict'
const http = require ('http'); // requerindo o HTTP
const express = require('express'); //requerindo o Express.JS
const path = require ('path')// requerindo o módulo para ter o caminho de sites
const bodyParser = require('body-parser');
const app = express(); //realizando funções para servidor

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/static/index.html')); //Página Inicial
});
app.get('/quemsomos', function (req, res) {
    res.sendFile(path.join(__dirname+'/static/quemsomos.html')); //Página Inicial
});
app.get('/servicos', function (req, res) {
    res.sendFile(path.join(__dirname+'/static/servicos.html')); //Página Inicial
});
app.get('/especialidades', function (req, res) {
    res.sendFile(path.join(__dirname+'/static/especialidades.html')); //Página Inicial
});
app.get('/equipe', function (req, res) {
    res.sendFile(path.join(__dirname+'/static/equipe.html')); //Página Inicial
});
app.get('/blog', function (req, res) {
    res.sendFile(path.join(__dirname+'/static/blog.html')); //Página Inicial
});
app.get('/depoimentos', function (req, res) {
    res.sendFile(path.join(__dirname+'/static/depoimentos.html')); //Página Inicial
});
app.get('/localizacao', function (req, res) {
    res.sendFile(path.join(__dirname+'/static/localizacao.html')); //Página Inicial
});

app.listen(2999, function () {
  console.log('Servidor Rodando no localhost:2999');
  console.log(' Para desligar use Ctrl + C :v')
});