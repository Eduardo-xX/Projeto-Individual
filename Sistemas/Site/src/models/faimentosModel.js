var database = require('../database/config')

function autenticar(idUsuario, nickname) {
    var instrucaoSql = `
        SELECT idContaFaitimentos, tagJogador, nickname, nivel, faixaNivel, totalUpgrades, totalXp, xp, dano, defesa, vida, velocidade, critico, chanceCritico, classe, dtCadastro 
        FROM contaFaitimentos WHERE fkUsuario = '${idUsuario}' AND nickname = '${nickname}'
    `

    return database.executar(instrucaoSql)
}

function autenticarConquistas(idUsuarioGame, idUsuario) {
    var instrucao_Sql = `
        SELECT realizado, fkConquista FROM conquistadas WHERE realizado = 1 AND fkContaFaitimentos = '${idUsuarioGame}' AND fkUsuario = '${idUsuario}';
    `
    console.log(instrucao_Sql)
    return database.executar(instrucao_Sql)
}

function cadastrar(idUsuario, nickname) {
    var instrucaoSql = `
        INSERT INTO contaFaitimentos (idContaFaitimentos, fkUsuario, tagJogador, nickname, nivel, faixaNivel, totalUpgrades, totalXp, xp, dano, defesa, vida, velocidade, critico, chanceCritico, classe)
        SELECT IFNULL(MAX(idContaFaitimentos), 0) + 1, '${idUsuario}', CONCAT((IFNULL(MAX(idContaFaitimentos), 0) + 1), '${idUsuario}'), '${nickname}', 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 'Rank D'
        FROM (SELECT * FROM contaFaitimentos) AS temp;
    `

    return database.executar(instrucaoSql)
}

async function cadastrarConquistas(idUsuario, nickname) {
    var instrucao_Sql = `
        SELECT idContaFaitimentos FROM contaFaitimentos WHERE fkUsuario = '${idUsuario}' AND nickname = '${nickname}';
    `

    var result = await database.executar(instrucao_Sql)

    var idUsuarioGame = result[0].idContaFaitimentos

    console.log('entrou no cadastro conquista')
    var instrucao_Sql = `
        INSERT INTO conquistadas (fkContaFaitimentos, fkUsuario, fkConquista, realizado) VALUES
        ('${idUsuarioGame}', '${idUsuario}', 1, 0),
        ('${idUsuarioGame}', '${idUsuario}', 2, 0),
        ('${idUsuarioGame}', '${idUsuario}', 3, 0),
        ('${idUsuarioGame}', '${idUsuario}', 4, 0),
        ('${idUsuarioGame}', '${idUsuario}', 5, 0),
        ('${idUsuarioGame}', '${idUsuario}', 6, 0),
        ('${idUsuarioGame}', '${idUsuario}', 7, 0),
        ('${idUsuarioGame}', '${idUsuario}', 8, 0),
        ('${idUsuarioGame}', '${idUsuario}', 9, 0),
        ('${idUsuarioGame}', '${idUsuario}', 10, 0),
        ('${idUsuarioGame}', '${idUsuario}', 11, 0),
        ('${idUsuarioGame}', '${idUsuario}', 12, 0),
        ('${idUsuarioGame}', '${idUsuario}', 13, 0),
        ('${idUsuarioGame}', '${idUsuario}', 14, 0),
        ('${idUsuarioGame}', '${idUsuario}', 15, 0),
        ('${idUsuarioGame}', '${idUsuario}', 16, 0),
        ('${idUsuarioGame}', '${idUsuario}', 17, 0),
        ('${idUsuarioGame}', '${idUsuario}', 18, 0),
        ('${idUsuarioGame}', '${idUsuario}', 19, 0),
        ('${idUsuarioGame}', '${idUsuario}', 20, 0);
    `

    var cadastroCQ = await database.executar(instrucao_Sql)

    console.log(cadastroCQ + '\nconquistas cadastradas')

    return
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

async function salvarConquistadas(idContaGame, idJogador, listaConquistas) {
    var instrucao_Sql = ''
    for (var i = 0; i < listaConquistas.length; i++) {
        instrucao_Sql = `SELECT realizado FROM conquistadas WHERE fkContaFaitimentos = '${idContaGame}' AND fkUsuario = '${idJogador}' AND fkConquista = '${listaConquistas[i]}'`

        var resultado = await database.executar(instrucao_Sql)
        if (resultado[0].realizado == 0) {
            instrucao_Sql = `UPDATE conquistadas SET realizado = 1 WHERE fkContaFaitimentos = '${idContaGame}' AND fkUsuario = '${idJogador}' AND  fkConquista = '${listaConquistas[i]}'`

            var atualizado = await database.executar(instrucao_Sql)

            console.log(atualizado)

            console.log(`Nova conquista realizada: ID ${listaConquistas[i]}`)
        } else if (resultado[0].realizado == 1) {
            console.log(`Já tinha realizado essa conquista: ID ${listaConquistas[i]}`)

        } else {
            console.log('Não encontrou a conquista no BD com seu Login')
        }

        return
    }
}

module.exports = {
    autenticar,
    autenticarConquistas,
    cadastrar,
    cadastrarConquistas,
    salvar,
    salvarConquistadas
}