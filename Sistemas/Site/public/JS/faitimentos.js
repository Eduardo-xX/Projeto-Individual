import { createFightInimigoBasicoD } from "./faitimentos/fight/criarFight.js";
import { personagem } from "./personagem/personagem.js";
import { verLimiteStatusRealPersonagem, verStatusRealPersonagem } from "./personagem/statusReal.js";
import { calcularValorEvolucaoNivel, calcularValorUpgradeChanceCritico, calcularValorUpgradeCritico, calcularValorUpgradeDano, calcularValorUpgradeDefesa, calcularValorUpgradeVelocidade, calcularValorUpgradeVida, upgradeChanceCritico, upgradeCritico, upgradeDano, upgradeDefesa, upgradeVelocidade, upgradeVida } from "./personagem/upgradePersonagem.js";

const meuGrafico = criarGrafico()
const meuGrafico1 = meuGrafico[0]
const meuGrafico2 = meuGrafico[1]
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
    attBarraStatus(personagem.faixaNivel, calcularValorEvolucaoNivel(), 'barXp', 'valorXp')
}

function attStatusDano() {
    var tagDano = document.getElementById('idDanoAtual')
    tagDano.innerText = personagem.dano
    attGrafico(meuGrafico1)
    attGrafico(meuGrafico2)
    attBarraStatus(personagem.dano, verLimiteStatusRealPersonagem().dano, 'barForca', 'valorForca')
}

function attStatusDefesa() {
    var tagDefesa = document.getElementById('idDefesaAtual')
    tagDefesa.innerText = personagem.defesa
    attGrafico(meuGrafico1)
    attGrafico(meuGrafico2)
    attBarraStatus(personagem.defesa, verLimiteStatusRealPersonagem().defesa, 'barDefesa', 'valorDefesa')
}

function attStatusVida() {
    var tagVida = document.getElementById('idVidaAtual')
    tagVida.innerText = personagem.vida
    attGrafico(meuGrafico1)
    attGrafico(meuGrafico2)
    attBarraStatus(personagem.vida, verLimiteStatusRealPersonagem().vida, 'barVida', 'valorVida')
}

function attStatusVelocidade() {
    var tagVelocidade = document.getElementById('idVelocidadeAtual')
    tagVelocidade.innerText = personagem.velocidade
    attGrafico(meuGrafico1)
    attGrafico(meuGrafico2)
    attBarraStatus(personagem.velocidade, verLimiteStatusRealPersonagem().velocidade, 'barVelocidade', 'valorVelocidade')
}

function attStatusCritico() {
    var tagCritico = document.getElementById('idCriticoAtual')
    tagCritico.innerText = personagem.critico
    attGrafico(meuGrafico1)
    attGrafico(meuGrafico2)
    attBarraStatus(personagem.critico, verLimiteStatusRealPersonagem().critico, 'barDCritico', 'valorDCritico')
}

function attStatusChanceCritico() {
    var tagChanceCritico = document.getElementById('idChanceCriticoAtual')
    tagChanceCritico.innerText = personagem.chanceCritico
    attGrafico(meuGrafico1)
    attGrafico(meuGrafico2)
    attBarraStatus(personagem.chanceCritico, verLimiteStatusRealPersonagem().chanceCritico, 'barCCritico', 'valorCCritico')
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
    var telaDashboard = document.getElementById('conteudoGameDashboard')
    
    if(telaStatus.style.display == 'none') {
        telaStatus.style.display = 'flex'
        if (telaHome.style.display == 'flex') {
            telaHome.style.display = 'none'
        }
        if (telaDashboard.style.display == 'flex') {
            telaDashboard.style.display = 'none'
        }
    }
}

window.irTelaHome = function() {
    var telaHome = document.getElementById('conteudoGameHome')
    var telaStatus = document.getElementById('conteudoGameStatus')
    var telaDashboard = document.getElementById('conteudoGameDashboard')

    if(telaHome.style.display == 'none') {
        telaHome.style.display = 'flex'
        if (telaStatus.style.display == 'flex') {
            telaStatus.style.display = 'none'
        }
        if (telaDashboard.style.display == 'flex') {
            telaDashboard.style.display = 'none'
        }
    }
}

window.irTelaDashboard = function() {
    var telaHome = document.getElementById('conteudoGameHome')
    var telaStatus = document.getElementById('conteudoGameStatus')
    var telaDashboard = document.getElementById('conteudoGameDashboard')

    if(telaDashboard.style.display == 'none') {
        document.getElementById('textClasse').textContent = personagem.classe
        var meuMax = (
            personagem.dano +
            personagem.defesa +
            personagem.vida +
            personagem.velocidade +
            personagem.critico +
            personagem.chanceCritico
        )
        var totalMax = (
            verLimiteStatusRealPersonagem().dano +
            verLimiteStatusRealPersonagem().defesa +
            verLimiteStatusRealPersonagem().vida +
            verLimiteStatusRealPersonagem().velocidade +
            verLimiteStatusRealPersonagem().critico +
            verLimiteStatusRealPersonagem().chanceCritico
        )
        var porcentagemClasse = meuMax * 100 / totalMax 
        document.getElementById('porcentClasse').textContent = `${porcentagemClasse.toFixed(1)}% da Classe`
        document.getElementById('dashboardNickname').textContent = personagem.nickname
        document.getElementById('idProgressoNivelAtual').textContent = personagem.nivel
        document.getElementById('idProgressoUpgradesR').textContent = personagem.totalUpgrades
        document.getElementById('idXpTotalO').textContent = personagem.totalXp
        // Pegar o dia
        var anoCadastrado = personagem.dtCadastro.substring(0, 4)
        var mesCadastrado = personagem.dtCadastro.substring(5, 7)
        var diaCadastrado = personagem.dtCadastro.substring(8, 10)
        var dia = new Date()
        var diasJogado = new Date(anoCadastrado, mesCadastrado - 1, diaCadastrado)
        var diferenca = dia.getTime() - diasJogado.getTime()
        var diferencaDias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
        document.getElementById('idDiasJogados').textContent = diferencaDias
        // ------------------------------------------------------------------

        // Alterar o STATUS PVP
        document.getElementById('idStatusPvpDano').textContent = verStatusRealPersonagem().dano
        document.getElementById('idStatusPvpDefesa').textContent = verStatusRealPersonagem().defesa
        document.getElementById('idStatusPvpVida').textContent = verStatusRealPersonagem().vida
        document.getElementById('idStatusPvpVelocidade').textContent = verStatusRealPersonagem().velocidade
        document.getElementById('idStatusPvpDanoCritico').textContent = `${verStatusRealPersonagem().critico.toFixed(2)} %`
        document.getElementById('idStatusPvpChanceCritico').textContent = `${verStatusRealPersonagem().chanceCritico + '%'}`
        
        telaDashboard.style.display = 'flex'
        if (telaStatus.style.display == 'flex') {
            telaStatus.style.display = 'none'
        }
        if (telaHome.style.display == 'flex') {
            telaHome.style.display = 'none'
        }
    }
}

window.batalharInimigoBasicoD = function() {
    createFightInimigoBasicoD()
}























function attBarraStatus(atual, max, idBarra, idTexto) {
    var pct = (atual / max) * 100
    document.getElementById(idBarra).style.width = pct + "%"
    document.getElementById(idTexto).innerText = `${atual} / ${max}`
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
    const ctx2 = document.getElementById('dashboardMyGrafico');
    
    var saveGrafico = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Defesa',
                'Vida',
                'Velocidade',
                'Dano Crítico',
                'Crítico %',
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

    var saveGraficoDash = new Chart(ctx2, {
        type: 'radar',
        data: {
            labels: [
                'Defesa',
                'Vida',
                'Velocidade',
                'Dano Crítico',
                'Crítico %',
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

    return [saveGrafico, saveGraficoDash]
}
