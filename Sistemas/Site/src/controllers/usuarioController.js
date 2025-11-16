var usuarioModel = require('../models/usuarioModel')

function autenticar(req, res) {
    var email = req.body.emailServer
    var senha = req.body.senhaServer

    if(email == undefined) {
        res.status(400).send('Seu email está undefined!')
    } else if (senha == undefined) {
        res.status(400).send('Sua senha está indefinida!')
    } else {
        usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].idUsuario,
                        nickname: resultadoAutenticar[0].nickname,
                        nome: resultadoAutenticar[0].nome,
                        sobrenome: resultadoAutenticar[0].sobrenome,
                        email: resultadoAutenticar[0].email,
                        dtNasc: resultadoAutenticar[0].dtNasc,
                    })
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send('Email e/ou senha inválido(s)')
                } else {
                    res.status(403).send('Mais de um usuário com o mesmo login e senha!')
                }
            }
        ).catch(
            function (erro) {
                res.status(500).json(erro.sqlMessage)
            }
        )
    }
}

function cadastrar(req, res) {
    var nickname = req.body.nicknameServer
    var nome = req.body.nomeServer
    var sobrenome = req.body.sobrenomeServer
    var email = req.body.emailServer
    var dtNasc = req.body.dtNascServer
    var senha = req.body.senhaServer

    if (nickname == undefined) {
        res.status(400).send('Seu nickname está undefined!')
    } else if (nome == undefined) {
        res.status(400).send('Seu nome está undefined!')
    } else if (sobrenome == undefined) {
        res.status(400).send('Seu sobrenome está undefined!')
    } else if (email == undefined) {
        res.status(400).send('Seu email está undefined!')
    } else if (dtNasc == undefined) {
        res.status(400).send('Sua Data de Nascimento está undefined!')
    } else if (senha == undefined) {
        res.status(400).send('Seu senha está undefined!')
    } else {
        usuarioModel.cadastrar(nickname, nome, sobrenome, email, dtNasc, senha)
            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

module.exports = {
    autenticar,
    cadastrar
}