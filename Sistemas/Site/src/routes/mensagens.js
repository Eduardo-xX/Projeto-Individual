var express = require("express")
var router = express.Router()

var mensagemController = require("../controllers/mensagemController")

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /mensagem/cadastrar
    mensagemController.cadastrar(req, res)
})

router.get("/listar", function (req, res) {
    // função a ser chamado quando acessar /mensagem/listar
    mensagemController.listar(req, res)
})

module.exports = router