function entrar() {
    var emailVar = input_emailUsuario.value
    var senhaVar = input_senhaUsuario.value

    if (emailVar == '' || senhaVar == '') {
        document.getElementById('textError').textContent = 'Preencha todos os campos'
        return
    } 

    fetch('/usuarios/autenticar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                document.getElementById('textError').textContent = ''
                resposta.json().then(json => {
                    sessionStorage.ID_USUARIO = json.id
                    sessionStorage.NICKNAME_USUARIO = json.nickname
                    sessionStorage.NOME_USUARIO = json.nome
                    sessionStorage.SOBRENOME_USUARIO = json.sobrenome
                    sessionStorage.EMAIL_USUARIO = json.email
                    sessionStorage.DTNASC_USUARIO = json.dtNasc

                    setTimeout(function () {
                        window.location = 'telaJogos.html'
                    }, 1000)
                })
            } else {
                document.getElementById('textError').textContent = 'Email e/ou senha inválido(s)'
                // alert('Houve um erro ao tentar realizar o login!')
            }
        }).catch(function (erro) {
            console.log(erro)
        })

    return false
}