var mensagemModels = require("../models/mensagemModels")

function listar(req, res) {
    mensagemModels.listar().then(function(resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado)
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage)
    })
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer
    var email = req.body.emailServer
    var telefone = req.body.telefoneServer
    var tema = req.body.temaServer
    var msg = req.body.mensagemServer

    if (nome == undefined) {
        return res.status(400).send("Seu nome está undefined!")
    } else if (email == undefined) {
        return res.status(400).send("Seu email está undefined!")
    } else if (telefone == undefined) {
        return res.status(400).send("Seu telefone está undefined!")
    } else if (tema == undefined) {
        return res.status(400).send("Seu tema está undefined!")
    } else if (msg == undefined) {
        return res.status(400).send("Sua mensagem está undefined!")
    }

    mensagemModels.cadastrar(nome, email, telefone, tema, msg).then(function(resposta) {
        res.status(200).send("Mensagem enviada com sucesso")
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage)
    })
}


module.exports = {
    listar,
    cadastrar
}