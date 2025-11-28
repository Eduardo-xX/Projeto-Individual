function entrarFaitimentos() {
    var idUsuarioVar = sessionStorage.ID_USUARIO
    var nicknameVar = sessionStorage.NICKNAME_USUARIO

    if (idUsuarioVar == '' || nicknameVar == '') {
        alert('Informações não encontradas, favor refazer login!')
        return
    }

    fetch('faitimentos/autenticar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuarioVar,
            nicknameServer: nicknameVar
        })
    })
        .then(async function (resposta) {
            alert('Você entrou no Faitimentos...')
            
            if (resposta.ok) {
                resposta.json().then(json => {
                    sessionStorage.ID_USUARIOCONTAFAITIMENTOS = json.idUsuarioFaitimentos
                    // sessionStorage.ID_USUARIOFAITIMENTOS = json.fkUsuario
                    sessionStorage.TAGJOGADOR_USUARIOFAITIMENTOS = json.tagJogador
                    sessionStorage.NICKNAME_USUARIOFAITIMENTOS = json.nickname
                    sessionStorage.NIVEL_USUARIOFAITIMENTOS = json.nivel
                    sessionStorage.FAIXANIVEL_USUARIOFAITIMENTOS = json.faixaNivel
                    sessionStorage.TOTALUPGRADES_USUARIOFAITIMENTOS = json.totalUpgrades
                    sessionStorage.TOTALXP_USUARIOFAITIMENTOS = json.totalXp
                    sessionStorage.XP_USUARIOFAITIMENTOS = json.xp
                    sessionStorage.DANO_USUARIOFAITIMENTOS = json.dano
                    sessionStorage.DEFESA_USUARIOFAITIMENTOS = json.defesa
                    sessionStorage.VIDA_USUARIOFAITIMENTOS = json.vida
                    sessionStorage.VELOCIDADE_USUARIOFAITIMENTOS = json.velocidade
                    sessionStorage.CRITICO_USUARIOFAITIMENTOS = json.critico
                    sessionStorage.CHANCECRITICO_USUARIOFAITIMENTOS = json.chanceCritico
                    sessionStorage.CLASSE_USUARIOFAITIMENTOS = json.classe
                    sessionStorage.DTCADASTRO_USUARIOFAITIMENTOS = json.dtCadastro
                })
                
                setTimeout(function () {
                    window.location = 'faitimentos.html'
                }, 1000)
            } else {
                const textoErro = await resposta.text()
                if (textoErro == 'Conta não encontrada') {
                    cadastrar()
                    return
                }
                // alert('Erro ao tentar entrar no jogo.') // pode gerar erro, sla
            }
        }).catch(function (erro) {
            console.log(erro)
        })

    return false
}

function cadastrar() {
    console.log('Entrei no Cadastrar')
    var idUsuarioVar = sessionStorage.ID_USUARIO
    var nicknameVar = sessionStorage.NICKNAME_USUARIO

    if (idUsuarioVar == '' || nicknameVar == '') {
        alert('Informações não encontradas, favor refazer login!')
        return
    }

    fetch('faitimentos/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuarioVar,
            nicknameServer: nicknameVar
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                alert('Primeira vez no Faitimentos - Conta criada.')
                entrarFaitimentos()

                // setTimeout(() => {
                //     window.location = 'faitimentos.html'
                // }, 2000)
            } else {
                alert('Houve um erro ao tentar criar sua conta!')
                throw('Houve um erro ao tentar criar sua conta!')
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`)
        })

    return false
}

function abrirMenuDropdown() {
    var menuDropdown = document.getElementById('idMenuDropdown')
    if (menuDropdown.style.display == 'none') {
        menuDropdown.style.display = 'block'
    } else {
        menuDropdown.style.display = 'none'
    }
}


function sairTelaJogos() {
    sessionStorage.clear()

    setTimeout(() => {
        window.location = 'index.html'
    }, 1000);
}