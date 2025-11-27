var faitimentosModel = require('../models/faimentosModel')

function autenticar(req, res) {
    var idUsuario = req.body.idUsuarioServer
    var nickname = req.body.nicknameServer

    if (idUsuario == undefined) {
        res.status(400).send('Seu idUsuario está undefined!')
    } else if (nickname == undefined) {
        res.status(400).send('Seu nickname está indefinido')
    } else {
        faitimentosModel.autenticar(idUsuario, nickname)
        .then(
            function (resultadoAutenticar) {
                if (resultadoAutenticar.length == 1 ) {
                    res.json({
                        idUsuarioFaitimentos: resultadoAutenticar[0].idContaFaitimentos,
                        // idUsuario: resultadoAutenticar[0].fkUsuario,
                        tagJogador: resultadoAutenticar[0].tagJogador,
                        nickname: resultadoAutenticar[0].nickname,
                        nivel: resultadoAutenticar[0].nivel,
                        faixaNivel: resultadoAutenticar[0].faixaNivel,
                        totalUpgrades: resultadoAutenticar[0].totalUpgrades,
                        totalXp: resultadoAutenticar[0].totalXp,
                        xp: resultadoAutenticar[0].xp,
                        dano: resultadoAutenticar[0].dano,
                        defesa: resultadoAutenticar[0].defesa,
                        vida: resultadoAutenticar[0].vida,
                        velocidade: resultadoAutenticar[0].velocidade,
                        critico: resultadoAutenticar[0].critico,
                        chanceCritico: resultadoAutenticar[0].chanceCritico,
                        classe: resultadoAutenticar[0].classe,
                        dtCadastro: resultadoAutenticar[0].dtCadastro,
                    })
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send('Conta não encontrada')
                } else {
                    res.status(403).send('Mais de uma conta encontrada com o mesmo login, favor chamar um admin!')
                }
            }
        ).catch (
            function (erro) {
                res.status(500).json(erro.sqlMessage)
            }
        )
    }
}

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuarioServer
    var nickname = req.body.nicknameServer

    if (idUsuario == undefined) {
        res.status(400).send('Seu idUsuario está undefined!')
    } else if (nickname == undefined) {
        res.status(400).send('Seu nickname está indefinido')
    } else {
        faitimentosModel.cadastrar(idUsuario, nickname)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch (
            function (erro) {
                res.status(500).json(erro.sqlMessage)
            }
        )
    }
}

function salvar(req, res) {
    var idUsuarioGame = req.body.idUsuarioGameServer
    var idUsuario = req.body.idUsuarioServer
    var nivel = req.body.nivelServer
    var faixaNivel = req.body.faixaNivelServer
    var totalUpgrades = req.body.totalUpgradesServer
    var totalXp = req.body.totalXpServer
    var xp = req.body.xpServer
    var dano = req.body.danoServer
    var defesa = req.body.defesaServer
    var vida = req.body.vidaServer
    var velocidade = req.body.velocidadeServer
    var critico = req.body.criticoServer
    var chanceCritico = req.body.chanceCriticoServer
    var conquistasFeitas = req.body.conquistasFeitasServer
    var classe = req.body.classeServer

    console.log(idUsuarioGame + ' ' +
            idUsuario + ' ' +
            nivel + ' ' +
            faixaNivel + ' ' +
            totalUpgrades + ' ' +
            totalXp + ' ' +
            xp + ' ' +
            dano + ' ' +
            defesa + ' ' +
            vida + ' ' +
            velocidade + ' ' +
            critico + ' ' +
            chanceCritico + ' ' +
            classe)

    if (idUsuarioGame == undefined) {
        res.status(400).send('Seu idUsuarioGame está undefined')
    } else if (idUsuario == undefined) {
        res.status(400).send('Seu idUsuario está undefined')
    } else if (nivel == undefined) {
        res.status(400).send('Seu nivel está undefined')
    } else if (faixaNivel == undefined) {
        res.status(400).send('Sua faixaNivel está undefined')
    } else if (totalUpgrades == undefined) {
        res.status(400).send('Seu totalUpgrades está undefined')
    } else if (totalXp == undefined) {
        res.status(400).send('Seu totalXp está undefined')
    } else if (xp == undefined) {
        res.status(400).send('Seu xp está undefined')
    } else if (dano == undefined) {
        res.status(400).send('Seu dano está undefined')
    } else if (defesa == undefined) {
        res.status(400).send('Sua defesa está undefined')
    } else if (vida == undefined) {
        res.status(400).send('Sua vida está undefined')
    } else if (velocidade == undefined) {
        res.status(400).send('Sua velocidade está undefined')
    } else if (critico == undefined) {
        res.status(400).send('Seu critico está undefined')
    } else if (chanceCritico == undefined) {
        res.status(400).send('Sua chanceCritico está undefined')
    } else if (conquistasFeitas == undefined) {
        res.status(400).send('Sua consquistasFeitas está undefined')
    } else if (classe == undefined) {
        res.status(400).send('Sua classe está undefined')
    } else {
        faitimentosModel.salvar(idUsuarioGame, idUsuario, nivel, faixaNivel, totalUpgrades, totalXp, xp, dano, defesa, vida, velocidade, critico, chanceCritico, classe)
        .then(
            function (resultado) {
                res.json(resultado)
                faitimentosModel.salvarConquistadas(idUsuarioGame, idUsuario, conquistasFeitas)
                console.log('feito')
            }
        ).catch (
            function (erro) {
                res.status(500).json(erro.sqlMessage)
            }
        )
    }
}

module.exports = {
    autenticar,
    cadastrar,
    salvar
}