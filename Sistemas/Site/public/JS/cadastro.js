function resetSessao() {
    sessionStorage.clear()
}


function dtNascimento() {
    var btnDtNasc = document.getElementById('input_dtNascUsuario')

    btnDtNasc.type = 'date'
}

function cadastrar() {
    var nicknameVar = input_nicknameUsuario.value
    var nomeVar = input_nomeUsuario.value
    var sobrenomeVar = input_sobrenomeUsuario.value
    var emailVar = input_emailUsuario.value
    var dtNascVar = input_dtNascUsuario.value
    var senhaVar = input_senhaUsuario.value
    var confirmSenhaVar = input_confirmSenhaUsuario.value

    // Verificando se há algum campo em branco
    if (
        nicknameVar == '' ||
        nomeVar == '' ||
        sobrenomeVar == '' ||
        emailVar == '' ||
        dtNascVar == '' ||
        senhaVar == '' ||
        confirmSenhaVar == ''
    ) {
        alert('Preencha todos os campos!')
        return false
    }

    fetch('/usuarios/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
            nicknameServer: nicknameVar,
            nomeServer: nomeVar,
            sobrenomeServer: sobrenomeVar,
            emailServer: emailVar,
            dtNascServer: dtNascVar,
            senhaServer: senhaVar,
            confirmSenhaServer: confirmSenhaVar
        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {
                alert('Cadastro realizado com sucesso! Redirecionando para tela de Login...')

                setTimeout(() => {
                    window.location = 'login.html'
                }, '2000')
            } else {
                alert('Houve um erro ao tentar realizar o cadastro!')
                throw 'Houve um erro ao tentar realizar o cadastro!'
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`)
        })

    return false
}