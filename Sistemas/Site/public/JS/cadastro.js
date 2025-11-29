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
        document.getElementById('idMensagemCadastro').textContent = 'Preencha todos os campos!'
        return false
    }

    if (nicknameVar.length < 3) {
        idMensagemCadastro.innerText = 'Nickname deve conter pelo menos 3 caracteres.'
        return
    }
    
    if (nomeVar.length < 3) {
        idMensagemCadastro.innerText = 'Nome deve conter pelo menos 3 caracteres.'
        return
    }
    
    if (sobrenomeVar.length < 3) {
        idMensagemCadastro.innerText = 'Sobrenome deve conter pelo menos 3 caracteres.'
        return
    }

    if (!emailVar.includes('@')) {
        idMensagemCadastro.innerText = 'E-mail deve conter pelo menos 1 @.'
        return
    }

    var antesA = emailVar.split('@')

    if (antesA[0].length < 3) {
        idMensagemCadastro.innerText = 'E-mail deve conter pelo menos 3 letras antes do @.'
        return
    }

    if (antesA[1].length < 3) {
        idMensagemCadastro.innerText = 'E-mail deve conter pelo menos 3 letras depois do @.'
        return
    }
    
    if (dtNascVar.length != 10) {
        idMensagemCadastro.innerText = 'Informe sua data de nascimento corretamente.'
        return
    }
    
    if (senhaVar.length < 8) {
        idMensagemCadastro.innerText = 'A senha deve conter no minímo 8 caracteres.'
        return
    }

    var senhaNumber = false
    for (var i = 0; i < senhaVar.length; i++) {
        if (!isNaN(senhaVar[i])) {
            senhaNumber = true
        }
    }
    
    if (!senhaNumber) {
        idMensagemCadastro.innerText = 'A senha deve conter no minímo 1 número.'
        return
    }
    
    var especiais = `!@#$%&*()_.,;:+-/`
    var temCEspecial = false
    for (var i = 0; i < senhaVar.length; i++) {
        if (especiais.includes(senhaVar[i])) {
            temCEspecial = true
        }
    }

    if (!temCEspecial) {
        // (! @ # $ % & * ( ) _ . , ; : + - / )
        idMensagemCadastro.innerText = 'A senha deve conter no minímo 1 caracter especial.'
        return
    }
    
    if (senhaVar == senhaVar.toLowerCase()) {
        idMensagemCadastro.innerText = 'A senha deve conter no minímo uma letra maiúscula.'
        return    
    }
    
    if (senhaVar == senhaVar.toUpperCase()) {
        idMensagemCadastro.innerText = 'A senha deve conter no minímo uma letra minúscula.'
        return    
    }
    
    if (senhaVar != confirmSenhaVar) {
        idMensagemCadastro.innerText = 'O Campo Confirme a Senha deve ser igual ao campo Senha'
        return        
    }

    input_nicknameUsuario.value = ''
    input_nomeUsuario.value = ''
    input_sobrenomeUsuario.value = ''
    input_emailUsuario.value = ''
    input_dtNascUsuario.value = ''
    input_senhaUsuario.value = ''
    input_confirmSenhaUsuario.value = ''

    idMensagemCadastro.innerText = ''
    idMensagemCadastrado.innerText = 'Usuário cadastrado.'

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