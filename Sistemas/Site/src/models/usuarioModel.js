var database = require('../database/config')

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, nickname, nome, sobrenome, email, dtNasc, dtCadastro FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `

    return database.executar(instrucaoSql)
}

function cadastrar(nickname, nome, sobrenome, email, dtNasc, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nickname, nome, sobrenome, email, dtNasc, senha) VALUES ('${nickname}', '${nome}', '${sobrenome}', '${email}', '${dtNasc}', '${senha}');
    `

    return database.executar(instrucaoSql)
}

module.exports = {
    autenticar,
    cadastrar
}