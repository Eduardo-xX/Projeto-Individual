import { createFightInimigoBasicoD } from "./faitimentos/fight/criarFight.js";
import { personagem } from "./personagem/personagem.js";
import { verLimiteStatusRealPersonagem } from "./personagem/statusReal.js";
import { calcularValorUpgradeChanceCritico, calcularValorUpgradeCritico, calcularValorUpgradeDano, calcularValorUpgradeDefesa, calcularValorUpgradeVelocidade, calcularValorUpgradeVida, upgradeChanceCritico, upgradeCritico, upgradeDano, upgradeDefesa, upgradeVelocidade, upgradeVida } from "./personagem/upgradePersonagem.js";

const meuGrafico = criarGrafico()
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
export function attStatusNivel() {
    var tagNivel = document.getElementById('idNivelAtual')
    tagNivel.innerText = personagem.nivel
}

export function attStatusXp() {
    var tagXp = document.getElementById('idXpAtual')
    tagXp.innerText = personagem.xp
}

function attStatusDano() {
    var tagDano = document.getElementById('idDanoAtual')
    tagDano.innerText = personagem.dano
    attGrafico(meuGrafico)
}

function attStatusDefesa() {
    var tagDefesa = document.getElementById('idDefesaAtual')
    tagDefesa.innerText = personagem.defesa
    attGrafico(meuGrafico)
}

function attStatusVida() {
    var tagVida = document.getElementById('idVidaAtual')
    tagVida.innerText = personagem.vida
    attGrafico(meuGrafico)
}

function attStatusVelocidade() {
    var tagVelocidade = document.getElementById('idVelocidadeAtual')
    tagVelocidade.innerText = personagem.velocidade
    attGrafico(meuGrafico)
}

function attStatusCritico() {
    var tagCritico = document.getElementById('idCriticoAtual')
    tagCritico.innerText = personagem.critico
    attGrafico(meuGrafico)
}

function attStatusChanceCritico() {
    var tagChanceCritico = document.getElementById('idChanceCriticoAtual')
    tagChanceCritico.innerText = personagem.chanceCritico
    attGrafico(meuGrafico)
}

export function attStatusClasse() {
    var tagClasse = document.getElementById('idClasseAtual')
    tagClasse.innerText = personagem.classe
}
// -------------------------

// Upar Status
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
//  ------------------------

// Área Menu
window.irTelaStatus = function() {
    var telaHome = document.getElementById('conteudoGameHome')
    var telaStatus = document.getElementById('conteudoGameStatus')
    
    if(telaStatus.style.display == 'none') {
        telaStatus.style.display = 'flex'
        if (telaHome.style.display == 'flex') {
            telaHome.style.display = 'none'
        }
    }
}

window.irTelaHome = function() {
    var telaHome = document.getElementById('conteudoGameHome')
    var telaStatus = document.getElementById('conteudoGameStatus')

    if(telaHome.style.display == 'none') {
        telaHome.style.display = 'flex'
        if (telaStatus.style.display == 'flex') {
            telaStatus.style.display = 'none'
        }
    }
}

window.batalharInimigoBasicoD = function() {
    createFightInimigoBasicoD()
}

























function attGrafico(grafico) {
    var statusPersonagemAtual = [
        personagem.defesa,
        personagem.vida,
        personagem.velocidade,
        personagem.critico,
        personagem.chanceCritico,
        personagem.dano
    ]

    var limites = verLimiteStatusRealPersonagem()
    var limiteStatusClasse = [
        limites.defesa,
        limites.vida,
        limites.velocidade,
        limites.critico,
        limites.chanceCritico,
        limites.dano,
    ]

    // console.log(grafico.data.datasets[0].data = [2, 2, 2, 2, 2, 2])
    grafico.data.datasets[0].data = statusPersonagemAtual
    grafico.update()
    grafico.data.datasets[1].data = limiteStatusClasse
    grafico.update()

    grafico.options.scales.r.max = limites.dano
    grafico.update()

}

function criarGrafico() {

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
    
    var saveGrafico = new Chart(ctx, {
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
                label: `Max Status ${personagem.classe}`,
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
            },
            scales: {
                r: {
                    pointLabels: {
                        color: '#ffffff',
                        font: {
                            size: 15,
                            // weight: 600,
                            // family: 'Poppins'
                        }
                    },
                    max: 5,
                    min: 0,
                    tickets: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff',
                        font: {
                            size: 13
                        }
                    }
                }
            }
        },
    });

    return saveGrafico
}
