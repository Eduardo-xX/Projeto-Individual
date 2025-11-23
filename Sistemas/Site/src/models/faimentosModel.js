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

module.exports = {
    autenticar,
    cadastrar,
    salvar
}