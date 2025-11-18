import { personagem } from "./personagem/personagem.js";
import { calcularValorUpgradeChanceCritico, calcularValorUpgradeCritico, calcularValorUpgradeDano, calcularValorUpgradeDefesa, calcularValorUpgradeVelocidade, calcularValorUpgradeVida, upgradeChanceCritico, upgradeCritico, upgradeDano, upgradeDefesa, upgradeVelocidade, upgradeVida } from "./personagem/upgradePersonagem.js";

attStatusAtuais()



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
    } else if (qual == 2) {
        upgradeDefesa()
        attStatusDefesa()
        attUpgradeStatus()
        attStatusXp()
    } else if (qual == 3) {
        upgradeVida()
        attStatusVida()
        attUpgradeStatus()
        attStatusXp()
    } else if (qual == 4) {
        upgradeVelocidade()
        attStatusVelocidade()
        attUpgradeStatus()
        attStatusXp()
    } else if (qual == 5) {
        upgradeCritico()
        attStatusCritico()
        attUpgradeStatus()
        attStatusXp()
    } else if (qual == 6) {
        upgradeChanceCritico()
        attStatusChanceCritico()
        attUpgradeStatus()
        attStatusXp()
    }
}





























const ctx = document.getElementById('myGrafico');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Eating',
                'Drinking',
                'Sleeping',
                'Designing',
                'Coding',
                'Cycling',
                'Running'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'My Second Dataset',
                data: [28, 48, 40, 19, 96, 27, 100],
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