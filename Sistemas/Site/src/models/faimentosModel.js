var database = require('../database/config')

function autenticar(idUsuario, nickname) {
    var instrucaoSql = `
        SELECT idContaFaitimentos, tagJogador, nickname, nivel, faixaNivel, totalUpgrades, totalXp, xp, dano, defesa, vida, velocidade, critico, chanceCritico, classe, dtCadastro 
        FROM contaFaitimentos WHERE fkUsuario = '${idUsuario}' AND nickname = '${nickname}'
    `

    return database.executar(instrucaoSql)
}

function cadastrar(idUsuario, nickname) {
    var instrucaoSql = `
        INSERT INTO contaFaitimentos (idContaFaitimentos, fkUsuario, tagJogador, nickname, nivel, faixaNivel, totalUpgrades, totalXp, xp, dano, defesa, vida, velocidade, critico, chanceCritico, classe)
        SELECT IFNULL(MAX(idContaFaitimentos), 0) + 1, '${idUsuario}', CONCAT((IFNULL(MAX(idContaFaitimentos), 0) + 1), '${idUsuario}'), '${nickname}', 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 'Rank D'
        FROM (SELECT * FROM contaFaitimentos) AS temp;
    `

    return database.executar(instrucaoSql)
}

function salvar(idContaGame, idJogador, nivel, faixaNivel, totalUpgrades, totalXp, xp, dano, defesa, vida, velocidade, critico, chanceCritico, classe) {
    var instrucaoSql = `
        UPDATE contaFaitimentos SET 
        nivel = '${nivel}',
        faixaNivel = '${faixaNivel}',
        totalUpgrades = '${totalUpgrades}',
        totalXp = '${totalXp}',
        xp = '${xp}',
        dano = '${dano}',
        defesa = '${defesa}',
        vida = '${vida}',
        velocidade = '${velocidade}',
        critico = '${critico}',
        chanceCritico = '${chanceCritico}',
        classe = '${classe}'
        WHERE idContaFaitimentos = '${idContaGame}' AND fkUsuario = '${idJogador}';
    `

    return database.executar(instrucaoSql)
}

function salvarConquistadas(idContaGame, idJogador, listaConquistas) {
    var contador  = ''
    var instrucao_Sql = ''
    for (var i = 0; i < listaConquistas.length; i++) {
        instrucao_Sql = `SELECT COUNT(fkConquista) FROM conquistadas WHERE fkContaFaitimentos = '${idContaGame}' AND fkUsuario = '${idJogador}' AND fkConquista = '${listaConquistas[0]}`

        var resultado = database.executar(instrucao_Sql)
        if (resultado.length >= 1) {
            console.log('Maior ou igual 3')
            console.log('Já tem essa conquista no BD')
        } else if (resultado.length == 0) {
            // Ou deu erro na verificação, não algo do tipo
            // Não tem nenhum cadastro com essa conta e informações.


            instrucao_Sql = `
                INSERT INTO conquistadas (fkContaFaimentos, idJogador fkConquista)  VALUES {
                    ('${idContaGame}', '${idJogador}', ${listaConquistas[i]})
                } 
            `
            database.executar(instrucao_Sql)
        } else {
            console.log('sla doido')
        }

        return 'ok, consigo tábom'
    }
}

module.exports = {
    autenticar,
    cadastrar,
    salvar,
    salvarConquistadas
}