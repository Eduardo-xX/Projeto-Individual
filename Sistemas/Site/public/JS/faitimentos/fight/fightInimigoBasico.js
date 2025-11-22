import { attStatusXp } from "../../faitimentos.js"
import { personagem } from "../../personagem/personagem.js"

export async function fightInimigoBasico(player, inimigo) {
    var playerFight = player
    var inimigoFight = inimigo
    console.log(`Começo da LUTA!!!`)
    console.log(`${player.nickname} VS ${inimigo.nickname}`)
    console.log(' ')
    // console.log('--- --- --- --- ---')
    // console.log(playerFight)
    // console.log(inimigoFight)
    // console.log('--- --- --- --- ---')

    var somaTudoPlayer = 0
    var somaTudoInimigo = 0
    var qmComeca = 0
    var comecaAleatorio = 0
    while (playerFight.vida > 0 && inimigoFight.vida > 0) {

        if (playerFight.velocidade > inimigoFight.velocidade) {
            playerAtaca(playerFight, inimigoFight)
            await tempoEspera(1000)
            if (playerFight.vida > 0 && inimigoFight.vida > 0) {
                inimigoAtaca(playerFight, inimigoFight)
                await tempoEspera(1000)
            }
        } else if (playerFight.velocidade < inimigoFight.velocidade) {
            inimigoAtaca(playerFight, inimigoFight)
            await tempoEspera(1000)
            if (playerFight.vida > 0 && inimigoFight.vida > 0) {
                playerAtaca(playerFight, inimigoFight)
                await tempoEspera(1000)
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
                playerAtaca(playerFight, inimigoFight)
                await tempoEspera(1000)
                if (playerFight.vida > 0 && inimigoFight.vida > 0) {
                    inimigoAtaca(playerFight, inimigoFight)
                    await tempoEspera(1000)
                }
            // Se tiver 2, o inimigo começa
            } else { // deu 2, o inimigo começa
                inimigoAtaca(playerFight, inimigoFight)
                await tempoEspera(1000)
                if (playerFight.vida > 0 && inimigoFight.vida > 0) {
                    playerAtaca(playerFight, inimigoFight)
                    await tempoEspera(1000)
                }
            }
        }
    }

    // Batalha acabou
    if (playerFight.vida <= 0 && inimigoFight.vida <= 0) {
        console.log(`A batalha empatou!`)
        console.log(`0 XP.`)
        // console.log(`0 Recompensas.`)
    }
    else if (playerFight.vida <= 0) {
        console.log(`Você Perdeu a batalha!`)
        console.log(`0 XP.`)
        // console.log(`0 Recompensas.`)
        console.log(' ')
        console.log(' ')
    } else if (inimigoFight.vida <= 0) {
        console.log(`Você Venceu a batalha!!!`)
        console.log(`Você ganhou ${inimigo.exp} EXPs.`)
        console.log(`Você ganhou ${inimigo.xp} XPs.`)
        // console.log(`0 Recompensas.`)
        console.log(' ')
        console.log(' ')
        personagem.faixaNivel += inimigo.exp
        personagem.totalXp += inimigo.xp
        personagem.xp += inimigo.xp
        attStatusXp()
    }
    console.log('Combate Finalizado...')
    console.log(' ')
    console.log(' ')
}

function playerAtaca(playerFight2, inimigoFight2) {  
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
    console.log(`${playerFight2.nickname} atacou e deu ${danoCausado} de dano no ${inimigoFight2.nickname}`)
    console.log(`${inimigoFight2.nickname} tinha ${inimigoFight2.vida + danoCausado} e ficou com ${inimigoFight2.vida}`)
    console.log(' ')
}

function inimigoAtaca(playerFight2, inimigoFight2) {
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
    console.log(`${inimigoFight2.nickname} atacou e deu ${danoCausado} de dano no ${playerFight2.nickname}`)
    console.log(`${playerFight2.nickname} tinha ${playerFight2.vida + danoCausado} e ficou com ${playerFight2.vida}`)
    console.log(' ')
}

function tempoEspera(tempo) {
    // ----------------
    return new Promise(resolve => setTimeout(resolve, tempo));
    // ----------------
}