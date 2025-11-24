import { attDashboard, attStatusXp } from "../../faitimentos.js"
import { personagem } from "../../personagem/personagem.js"
import { evoluirLevel } from "../../personagem/upgradePersonagem.js"

function tempoEspera(tempo) {
    // ----------------
    return new Promise(resolve => setTimeout(resolve, tempo));
    // ----------------
}

function attBarraVidaCombate(atual, max, idBarra, idTexto) {
    var pct = (atual / max) * 100
    document.getElementById(idBarra).style.width = pct + "%"
    document.getElementById(idTexto).innerText = `${atual} / ${max}`
}

export async function fightInimigoBasico(player, inimigo) {
    // Recebe os status do player e do inimigo
    var playerFight = player
    var inimigoFight = inimigo

    var vidaMaxPlayer = player.vida
    var vidaMaxInimigo = inimigo.vida

    // Variavel criada para acontecer apenas 1 combate por vez
    if (typeof combateAtivo == 'undefined') {
        var combateAtivo = false
    }

    if (combateAtivo == true) {
        return console.log('Espere a batalha acabar para começar outra.')
    }
    
    // Pega o container da luta e verifica se já está aparecendo para começar uma nova luta
    var base = document.getElementById('containerCombate')
    if (base.style.display != 'none') {
        return console.log('Espere a batalha acabar para começar outra.')
    }
    base.style.display = 'flex'
    
    // Coloca as skins do personagem 1 e do personagem 2
    document.getElementById('imgPerso1Combate').src = './assets/Holding_Object_Standing (32 x 32).png'
    document.getElementById('imgPerso2Combate').src = './assets/Victory_Pose (32 x 32).png'
    
    attBarraVidaCombate(player.vida, player.vida, 'barVidaPerso1', 'valorVidaPerso1')
    attBarraVidaCombate(inimigo.vida, inimigo.vida, 'barVidaPerso2', 'valorVidaPerso2')

    var chat = document.getElementById('idChatPvp')
    
    var divDom = document.createElement('div')
    divDom.classList.add('elementoDom')

    var msgInicial = `
        <div id="msgInicialLuta">
            <div>
                <span>Começo da LUTA!!!</span>
            </div>
            <div>
                <span>${playerFight.nickname} VS ${inimigoFight.nickname}</span>
            </div>
        </div>
    `

    function pegarMsgLuta(textPersoAtaque, textPersoDefende, textQuantDano, textQuantVida) {
        var msgLuta = `
        <div id="msgFightLuta">
                <div class="firstAtaque ataques">
                    <span class="persoBold persoTop">${textPersoAtaque}</span>
                    <span class="msgAtaque">Atacou e causou ${textQuantDano} de dano!</span>
                </div>
                <div> - - - - - </div>
                <div class="secondAtaque ataques">
                    <span class="persoBold persoBot">${textPersoDefende}</span>
                    <span class="msgAtaque">Ficou com ${textQuantVida} de vida</span>
                </div>
            </div>
        `

        return msgLuta
    }


    var msgEmpate = `
        <div id="msgFinalLuta">
            <div class="empate">
                Você Perdeu a batalha!!!
            </div>
            <div class="recompensaCombate">
                0 XP e 0 EXP.
            </div>
        </div>
    `

    var msgDerrota = `
        <div id="msgFinalLuta">
            <div class="loser">
                Você Perdeu a batalha!!!
            </div>
            <div class="recompensaCombate">
                0 XP e 0 EXP.
            </div>
        </div>
    `

    function pegarMsgVitoria(textTextXp, textTextExp) {
        var msgVitoria = `
            <div id="msgFinalLuta">
                <div class="winner">
                    Você Venceu a batalha!!!
                </div>
                <div class="recompensaCombate">
                    Ganhou ${textTextXp} XPs e ${textTextExp} EXPs.
                </div>
            </div>
        `

        return msgVitoria
    }

    divDom.innerHTML = msgInicial
    chat.appendChild(divDom)

    await tempoEspera(2000)

    chat.removeChild(divDom)

    var somaTudoPlayer = 0
    var somaTudoInimigo = 0
    var qmComeca = 0
    var comecaAleatorio = 0

    while (playerFight.vida > 0 && inimigoFight.vida > 0) {

        if (playerFight.velocidade > inimigoFight.velocidade) {
            
            var danoC = playerAtaca(playerFight, inimigoFight, vidaMaxInimigo)
            divDom.innerHTML = pegarMsgLuta(playerFight.nickname, inimigoFight.nickname, danoC, inimigoFight.vida)
            chat.appendChild(divDom)
            await tempoEspera(2000)
            chat.removeChild(divDom)

            if (playerFight.vida > 0 && inimigoFight.vida > 0) {
                var danoC = inimigoAtaca(playerFight, inimigoFight, vidaMaxPlayer)
                divDom.innerHTML = pegarMsgLuta(inimigoFight.nickname, playerFight.nickname, danoC, playerFight.vida)
                chat.appendChild(divDom)
                await tempoEspera(2000)
                chat.removeChild(divDom)
            }
        } else if (playerFight.velocidade < inimigoFight.velocidade) {
            var danoC = inimigoAtaca(playerFight, inimigoFight, vidaMaxPlayer)
            divDom.innerHTML = pegarMsgLuta(inimigoFight.nickname, playerFight.nickname, danoC, playerFight.vida)
            chat.appendChild(divDom)
            await tempoEspera(2000)
            chat.removeChild(divDom)
            if (playerFight.vida > 0 && inimigoFight.vida > 0) {
                var danoC = playerAtaca(playerFight, inimigoFight, vidaMaxInimigo)
                divDom.innerHTML = pegarMsgLuta(playerFight.nickname, inimigoFight.nickname, danoC, inimigoFight.vida)
                chat.appendChild(divDom)
                await tempoEspera(2000)
                chat.removeChild(divDom)
            }
        } else {
            // Entra aqui caso o player e o inimigo esteja com a mesma velocidade
            somaTudoPlayer = 0
            somaTudoInimigo = 0
            qmComeca = 0
            somaTudoPlayer = (
                playerFight.dano +
                playerFight.defesa +
                playerFight.vida +
                playerFight.critico
            )
            somaTudoInimigo = (
                inimigoFight.dano +
                inimigoFight.defesa +
                inimigoFight.vida +
                inimigoFight.critico
            )
            // Verifica quem tem a maior soma de Status para começar jogando
            if (somaTudoPlayer > somaTudoInimigo) {
                qmComeca = 1
            } else if (somaTudoPlayer < somaTudoInimigo) {
                qmComeca = 2
            }
            if (qmComeca == 0) {
                // Verifica quem está com mais vida
                if (playerFight.vida > inimigoFight.vida) {
                    qmComeca = 1
                } else if (playerFight.vida < inimigoFight.vida) {
                    qmComeca = 2
                }
                if (qmComeca == 0) {
                    // Gera um número aleatório para ver quem começa
                    comecaAleatorio = parseInt(Math.random() * 2 + 1)
                    if (comecaAleatorio == 1) {
                        qmComeca = 1
                    } else {
                        qmComeca = 2
                    }
                }
            }

            // Se tiver 1, o player começa
            if (qmComeca == 1) {
                var danoC = playerAtaca(playerFight, inimigoFight, vidaMaxInimigo)
                divDom.innerHTML = pegarMsgLuta(playerFight.nickname, inimigoFight.nickname, danoC, inimigoFight.vida)
                chat.appendChild(divDom)
                await tempoEspera(2000)
                chat.removeChild(divDom)
                if (playerFight.vida > 0 && inimigoFight.vida > 0) {
                    var danoC = inimigoAtaca(playerFight, inimigoFight, vidaMaxPlayer)
                    divDom.innerHTML = pegarMsgLuta(inimigoFight.nickname, playerFight.nickname, danoC, playerFight.vida)
                    chat.appendChild(divDom)
                    await tempoEspera(2000)
                    chat.removeChild(divDom)
                }
            // Se tiver 2, o inimigo começa
            } else { // deu 2, o inimigo começa
                var danoC = inimigoAtaca(playerFight, inimigoFight, vidaMaxPlayer)
                divDom.innerHTML = pegarMsgLuta(inimigoFight.nickname, playerFight.nickname, danoC, playerFight.vida)
                chat.appendChild(divDom)
                await tempoEspera(2000)
                chat.removeChild(divDom)
                if (playerFight.vida > 0 && inimigoFight.vida > 0) {
                    var danoC = playerAtaca(playerFight, inimigoFight, vidaMaxInimigo)
                    divDom.innerHTML = pegarMsgLuta(playerFight.nickname, inimigoFight.nickname, danoC, inimigoFight.vida)
                    chat.appendChild(divDom)
                    await tempoEspera(2000)
                    chat.removeChild(divDom)
                }
            }
        }
    }

    // Batalha acabou
    if (playerFight.vida <= 0 && inimigoFight.vida <= 0) {
        divDom.innerHTML = msgEmpate
        chat.appendChild(divDom)

        await tempoEspera(2000)

        chat.removeChild(divDom)
    } else if (playerFight.vida <= 0) {
        divDom.innerHTML = msgDerrota
        chat.appendChild(divDom)

        await tempoEspera(2000)

        chat.removeChild(divDom)
    } else if (inimigoFight.vida <= 0) {
        divDom.innerHTML = pegarMsgVitoria(inimigo.xp, inimigo.exp)
        chat.appendChild(divDom)

        await tempoEspera(2000)

        chat.removeChild(divDom)
        
        personagem.faixaNivel += inimigo.exp
        personagem.totalXp += inimigo.xp
        personagem.xp += inimigo.xp

        attStatusXp()
        evoluirLevel()
        attDashboard()
    }

    base.style.display = 'none'
}

function playerAtaca(playerFight2, inimigoFight2, inimigoVidaTotal) {  
    var danoCausado = 0
    var geradorCritico = 0
    var teveCritico = false
    // Teve Crítico?
    teveCritico = false
    geradorCritico = parseInt(Math.random() * 101)
    if (geradorCritico <= playerFight2.chanceCritico) {
        teveCritico = true
    }
    // Calcular dano
    danoCausado = 0
    danoCausado = playerFight2.dano - inimigoFight2.defesa
    if (teveCritico) {
        danoCausado *= playerFight2.critico
    }
    if (danoCausado < 0) {
        danoCausado = 0
    }
    inimigoFight2.vida -= danoCausado
    if (inimigoFight2.vida < 0) {
        inimigoFight2.vida = 0
    }
    

    attBarraVidaCombate(inimigoFight2.vida, inimigoVidaTotal, 'barVidaPerso2', 'valorVidaPerso2')

    return danoCausado
    
}

function inimigoAtaca(playerFight2, inimigoFight2, playerVidaTotal) {
    var danoCausado = 0
    var geradorCritico = 0
    var teveCritico = false
    // Teve Crítico?
    teveCritico = false
    geradorCritico = parseInt(Math.random() * 101)
    if (geradorCritico <= inimigoFight2.chanceCritico) {
        teveCritico = true
    }
    // Calcular dano
    danoCausado = 0
    danoCausado = inimigoFight2.dano - playerFight2.defesa
    if (teveCritico) {
        danoCausado *= inimigoFight2.critico
    }
    if (danoCausado < 0) {
        danoCausado = 0
    }
    playerFight2.vida -= danoCausado
    if (playerFight2.vida < 0) {
        playerFight2.vida = 0
    }
    
    attBarraVidaCombate(playerFight2.vida, playerVidaTotal, 'barVidaPerso1', 'valorVidaPerso1')

    return danoCausado
}









// Mensagem Inicial da Luta


// Mensagem na Luta


// Mensagem de Empate


// Mensagem de Derrota


// Mensagem de Vitória
