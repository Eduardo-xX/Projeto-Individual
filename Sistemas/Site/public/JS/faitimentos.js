import { personagem } from "./personagem/personagem.js";
import { calcularValorUpgradeChanceCritico, calcularValorUpgradeCritico, calcularValorUpgradeDano, calcularValorUpgradeDefesa, calcularValorUpgradeVelocidade, calcularValorUpgradeVida, upgradeChanceCritico, upgradeCritico, upgradeDano, upgradeDefesa, upgradeVelocidade, upgradeVida } from "./personagem/upgradePersonagem.js";

attStatusAtuais()
attGrafico()



// Atualizar os Status Iniciais do Personagem
function attStatusAtuais() {
    attStatusNivel()
    attStatusXp()
    attStatusDano()
    attStatusDefesa()
    attStatusVida()
    attStatusVelocidade()
    attStatusCritico()
    attStatusChanceCritico()
    attStatusClasse()
    attUpgradeStatus()
}

// Atualizar os Upgrades de Status do Personagem
function attUpgradeStatus() {
    var tagUpgradeDano = document.getElementById('idUpgradeDano')
    tagUpgradeDano.innerText = calcularValorUpgradeDano()
    var tagUpgradeDefesa = document.getElementById('idUpgradeDefesa')
    tagUpgradeDefesa.innerText = calcularValorUpgradeDefesa()
    var tagUpgradeVida = document.getElementById('idUpgradeVida')
    tagUpgradeVida.innerText = calcularValorUpgradeVida()
    var tagUpgradeVelocidade = document.getElementById('idUpgradeVelocidade')
    tagUpgradeVelocidade.innerText = calcularValorUpgradeVelocidade()
    var tagUpgradeCritico = document.getElementById('idUpgradeCritico')
    tagUpgradeCritico.innerText = calcularValorUpgradeCritico()
    var tagUpgradeChanceCritico = document.getElementById('idUpgradeChanceCritico')
    tagUpgradeChanceCritico.innerText = calcularValorUpgradeChanceCritico()
}

// Atulizar Separadamente os Status
function attStatusNivel() {
    var tagNivel = document.getElementById('idNivelAtual')
    tagNivel.innerText = personagem.nivel
}

function attStatusXp() {
    var tagXp = document.getElementById('idXpAtual')
    tagXp.innerText = personagem.xp
}

function attStatusDano() {
    var tagDano = document.getElementById('idDanoAtual')
    tagDano.innerText = personagem.dano
}

function attStatusDefesa() {
    var tagDefesa = document.getElementById('idDefesaAtual')
    tagDefesa.innerText = personagem.defesa
}

function attStatusVida() {
    var tagVida = document.getElementById('idVidaAtual')
    tagVida.innerText = personagem.vida
}

function attStatusVelocidade() {
    var tagVelocidade = document.getElementById('idVelocidadeAtual')
    tagVelocidade.innerText = personagem.velocidade
}

function attStatusCritico() {
    var tagCritico = document.getElementById('idCriticoAtual')
    tagCritico.innerText = personagem.critico
}

function attStatusChanceCritico() {
    var tagChanceCritico = document.getElementById('idChanceCriticoAtual')
    tagChanceCritico.innerText = personagem.chanceCritico
}

function attStatusClasse() {
    var tagClasse = document.getElementById('idClasseAtual')
    tagClasse.innerText = personagem.classe
}
// -------------------------

window.uparAlgo = function(qual) {
    if (qual == 1) {
        upgradeDano()
        attStatusDano()
        attUpgradeStatus()
        attStatusXp()
        attGrafico()
    } else if (qual == 2) {
        upgradeDefesa()
        attStatusDefesa()
        attUpgradeStatus()
        attStatusXp()
        attGrafico()
    } else if (qual == 3) {
        upgradeVida()
        attStatusVida()
        attUpgradeStatus()
        attStatusXp()
        attGrafico()
    } else if (qual == 4) {
        upgradeVelocidade()
        attStatusVelocidade()
        attUpgradeStatus()
        attStatusXp()
        attGrafico()
    } else if (qual == 5) {
        upgradeCritico()
        attStatusCritico()
        attUpgradeStatus()
        attStatusXp()
        attGrafico()
    } else if (qual == 6) {
        upgradeChanceCritico()
        attStatusChanceCritico()
        attUpgradeStatus()
        attStatusXp()
        attGrafico()
    }
}



























function attGrafico() {
    var statusPersonagemAtual = [
        personagem.defesa,
        personagem.vida,
        personagem.velocidade,
        personagem.critico,
        personagem.chanceCritico,
        personagem.dano
    ]

    var limiteStatusClasse = [
        5,
        5,
        5,
        5,
        5,
        5
    ]

    const ctx = document.getElementById('myGrafico');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Defesa',
                'Vida',
                'Velocidade',
                'Crítico',
                'Chance Crítico',
                'Força'
            ],
            datasets: [{
                label: 'Status Personagem',
                data: statusPersonagemAtual,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'Max Status Classe',
                data: limiteStatusClasse,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }],
        },
        options: {
            elements: {
            line: {
                borderWidth: 3
            }
            }
        },
    });
}
