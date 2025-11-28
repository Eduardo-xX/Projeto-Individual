var express = require('express')
var router = express.Router()

var faitimentosController = require('../controllers/faitimentosController')

router.post('/cadastrar', function (req, res) {
    faitimentosController.cadastrar(req, res)
})

router.post('/autenticar', function (req, res) {
    faitimentosController.autenticar(req, res)
})

router.post('/autenticarConquistas', function(req, res) {
    faitimentosController.autenticarConquistas(req, res)
})

router.post('/salvar', function(req, res) {
    faitimentosController.salvar(req, res)
})

module.exports = router