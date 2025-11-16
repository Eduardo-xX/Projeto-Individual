function enviarMsg() {
    // pega os valores das inputs
    var nomeVar = input_nomeUsuario.value
    var emailVar = input_emailUsuario.value
    var telefoneVar = input_telefoneUsuario.value
    var temaVar = select_temaMensagem.value
    var mensagemVar = textarea_mensagem.value

    // Verificar se tem campo em branco
    if (
        nomeVar == '' ||
        emailVar == '' ||
        telefoneVar == '' ||
        temaVar == '' ||
        mensagemVar == ''
    ) {
        alert('Preencha todos os campos')
        return false
    }

    // Enviando o valor das inputs
    fetch("/mensagens/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            nomeServer: nomeVar,
            emailServer: emailVar,
            telefoneServer: telefoneVar,
            temaServer: temaVar,
            mensagemServer: mensagemVar
        }),
    }).then(function (resposta) {
        console.log("resposta: ", resposta) 
        
        if (resposta.ok) {
            alert('Mensagem enviada com sucesso!')

            input_nomeUsuario.value = ''
            input_emailUsuario.value = ''
            input_telefoneUsuario.value = ''
            select_temaMensagem.value = ''
            textarea_mensagem.value = ''
        } else {
            console.log(resposta)
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
    })
}