var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM mensagem;
    `
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function cadastrar(nome, email, telefone, tema, msg) {
    var instrucao = `
        INSERT INTO mensagem (nome, email, telefone, tema, mensagem) VALUES ('${nome}', '${email}', '${telefone}', '${tema}', '${msg}');
    `
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

module.exports = {
    cadastrar,
    listar
}