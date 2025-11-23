function resetSessao() {
    sessionStorage.clear()
}

var textJogoClickerLizard = `
    Primeiro jogo que eu realmente tentei focar para desenvolver.
    <br>
    Comecei ele para praticar programação e desenvolver novas habilidades. 
    <br>
    Tenho ele comitado no meu Github pessoal, espero um dia conseguir continuar desenvolvendo ele pois tive que pausar quando entrei na SPTECH.
    <br><br>
    Ele é um jogo clicker, com sistema de level e autoclick já implementados, antes de eu parar de desenvolve-lo eu estava implementando um sistema de personagem e bosses.
    <br>
    Você conseguiria upar seus status e após chegar a um certo level iria desbloquear o boss para derrotá-lo.
    <br>
    Após derrotar esse boss você iria desbloquear 3 novos upgrades:
    <br>
    1° para upar e aumentar a quantidade de pontos que o boss iria te dar,
    <br>
    2° para upar e aumentar a quantidade de tempo da sequencia de pontos gerados,
    <br>
    3° para upar e diminuir o delay que este boss iria te gerar na sequencia de pontos.
`

var listaImgJogoClickerLizard = ['/assets/clickerLizard1.png', '/assets/clickerLizard2.png', '/assets/clickerLizard3.png', '/assets/clickerLizard4.png', '/assets/clickerLizard5.png']

var listaImgJogoFaitimentos = ['/assets/imgTest1.png', '/assets/imgTest2.png', '/assets/imgTest3.png', '/assets/imgTest4.png', '/assets/imgTest5.png', '/assets/imgTest6.png']

var listaImgJogosAtuais = ['/assets/clickerLizard1.png', '/assets/clickerLizard2.png', '/assets/clickerLizard3.png', '/assets/clickerLizard4.png', '/assets/clickerLizard5.png']

var listaJogos = [
    ['Clicker Lizard', 'Em Desenvolvimento...', textJogoClickerLizard, listaImgJogoClickerLizard], 
    ['Faitimentos', 'Em Desenvolvimento', 'Textinho do Faitimentos<br>muito bom o jogo', listaImgJogoFaitimentos]
]

function alterarJogoRight() {
    var titleJogo = document.getElementById('idTitleJogo')
    var miniTitleJogo = document.getElementById('idMiniTitleJogo')
    var textJogo = document.getElementById('idTextJogo')

    var saveI
    for (var i = 0; i < listaJogos.length; i++) {
        if (titleJogo.innerText == listaJogos[i][0]) {
            saveI = i
            if (saveI == listaJogos.length - 1) {
                saveI = -1
            }
            i = listaJogos.length
        } else {
            saveI = -1
        }
    }

    saveI++
    titleJogo.innerText = listaJogos[saveI][0]
    miniTitleJogo.innerText = listaJogos[saveI][1]
    textJogo.innerHTML = listaJogos[saveI][2]
    listaImgJogosAtuais = listaJogos[saveI][3]

    alterarImagemJogoRight()
}

function alterarJogoLeft() {
    var titleJogo = document.getElementById('idTitleJogo')
    var miniTitleJogo = document.getElementById('idMiniTitleJogo')
    var textJogo = document.getElementById('idTextJogo')

    var saveI
    for (var i = listaJogos.length - 1; i > 0; i--) {
        if (titleJogo.innerText == listaJogos[i][0]) {
            saveI = i
            if (saveI == 0) {
                saveI = listaJogos.length
            }
            i = 0
        } else {
            saveI = listaJogos.length
        }
    }

    saveI--
    titleJogo.innerText = listaJogos[saveI][0]
    miniTitleJogo.innerText = listaJogos[saveI][1]
    textJogo.innerHTML = listaJogos[saveI][2]
    listaImgJogosAtuais = listaJogos[saveI][3]

    alterarImagemJogoRight()
}

function alterarImagemJogoRight() {
    var img = document.getElementById('imgCarrosselJogo')
    var srcImg = img.src
    var saveI
    for (var i = 0; i < listaImgJogosAtuais.length; i++) {
        if (srcImg.includes(listaImgJogosAtuais[i])) {
            saveI = i
            if (saveI == (listaImgJogosAtuais.length - 1)) {
                saveI = -1
            }
            i = listaImgJogosAtuais.length
        } else {
            saveI = -1
        }
    }
    img.src = '.' + listaImgJogosAtuais[saveI + 1]
}

function alterarImagemJogoLeft() {
    var img = document.getElementById('imgCarrosselJogo')
    var srcImg = img.src
    var saveI
    for (var i = listaImgJogosAtuais.length - 1; i > 0; i--) {
        if (srcImg.includes(listaImgJogosAtuais[i])) {
            saveI = i
            if (saveI == 0) {
                saveI = listaImgJogosAtuais.length
            }
            i = 0
        } else {
            saveI = listaImgJogosAtuais.length
        }
    }
    img.src = '.' + listaImgJogosAtuais[saveI - 1]
}