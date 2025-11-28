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
        idMensagemContato.innerText = 'Preencha todos os campos'
        // alert('Preencha todos os campos')
        return false
    }
    
    if (nomeVar.length < 3) {
        idMensagemContato.innerText = 'Nome de Usuário deve conter pelo menos 3 letras.'
        return false
    }
    if (!emailVar.includes('@')) {
        idMensagemContato.innerText = 'E-mail deve conter pelo menos 1 @.'
        return false
    }
    var antesA = emailVar.split('@')
    if (antesA[0].length < 3) {
        idMensagemContato.innerText = 'E-mail deve conter pelo menos 3 letras antes do @.'
        return false
    }
    if (antesA[1].length < 3) {
        idMensagemContato.innerText = 'E-mail deve conter pelo menos 3 letras depois do @.'
        return false
    }
    if (telefoneVar.length != 15) {
        idMensagemContato.innerText = 'Preencha o telefone corretamente.'
        return false
    }
    if (temaVar == '#') {
        idMensagemContato.innerText = 'Escolha um tema para a Mensagem.'
        return false
    }
    if (mensagemVar.length < 10) {
        idMensagemContato.innerText = 'A mensagem deve conter pelo menos 10 caracteres.'
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
            select_temaMensagem.value = '#'
            textarea_mensagem.value = ''
        } else {
            console.log(resposta)
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`)
    })
}


// Validações do Entre em Contato

// Validação de Nome de Usuário
function valNomeU() {
    var nomeU = document.getElementById('input_nomeUsuario').value

    if (nomeU.length > 45) {
        input_nomeUsuario.value = input_nomeUsuario.value.slice(0, 45)
        idMensagemContato.innerText = 'Nome de Usuário não pode ultrapassar os 45 caracteres'
    } else {
        idMensagemContato.innerText = ''
    }
}

// Validação de Email
function valEmail() {
    var email = document.getElementById('input_emailUsuario').value

    var tamanho = email.length - 1
    
    if (email.includes('@')) { // Não pode ter mais de 1 '@'
        email = email.replace('@', '*')
        if (email.includes('@')) {
            idMensagemContato.innerText = 'Apenas 1 "@" é permitido'
        } else {
            idMensagemContato.innerText = ''
        }    
    } else {
        idMensagemContato.innerText = ''
    }    

    if (email[0] == '.' || (email[tamanho] == '.' && email[(tamanho - 1)] == '.')) { // Não deixa começar com ponto e nem ter 2 pontos seguidos
        input_emailUsuario.value = input_emailUsuario.value.slice(0, -1)
    }
    
    if (email[tamanho] == ' ' || email[tamanho] == ',' || email[tamanho] == ':' || email[tamanho] == ';') { // Não pode usar 'espaço', 'vírgula', ':', ';'
        input_emailUsuario.value = input_emailUsuario.value.slice(0, -1)
    }

    if (email.length > 320) {
        input_emailUsuario.value = input_emailUsuario.value.slice(0, 320)
        idMensagemContato.innerText = 'E-mail não pode ultrapassar os 320 caracteres'
    } else {
        idMensagemContato.innerText = ''
    }
}

// Mascara para o telefone
function valTel() {
    var tel = document.getElementById('input_telefoneUsuario').value
    var tamanho = tel.length - 1

    if (!isNaN(tel[tamanho]) && !(tel[tamanho] == ' ')) { // Deixa digitar apenas números
        if (tamanho == 2 && tel[0] != '(') { // Coloca os parenteses automatico a partir do terceiro número colocado
            input_telefoneUsuario.value = `(${tel[0]}${tel[1]}) ${input_telefoneUsuario.value.slice(2, (tamanho + 1))}`
        } else if (tamanho == 10) { // Coloca o traço automatico
            input_telefoneUsuario.value = input_telefoneUsuario.value.slice(0, -1) + '-' + input_telefoneUsuario.value[tamanho]
        }
    } else { // Apaga tudo que não for número
        input_telefoneUsuario.value = input_telefoneUsuario.value.slice(0, -1)
    }
    
    if (tamanho > 14) { // Não deixa colocar mais que 14 caracteres
        input_telefoneUsuario.value = input_telefoneUsuario.value.slice(0, -1)
    }
}

function valMsg() {
    var mensagem = document.getElementById('textarea_mensagem').value

    if (mensagem.length > 500) {
        textarea_mensagem.value = textarea_mensagem.value.slice(0, 500)
        idMensagemContato.innerText = 'Mensagem não pode ultrapassar os 500 caracteres'
    } else {
        idMensagemContato.innerText = ''
    }
}