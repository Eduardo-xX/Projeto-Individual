import { personagem } from "./personagem.js";

export function verStatusRealPersonagem() {
    var statusRealPersonagem = {
        nickname: personagem.nickname,
        dano: (personagem.dano * 2),
        defesa: (personagem.defesa * 1),
        vida: (personagem.vida * 5),
        velocidade: (personagem.velocidade * 1),
        critico: ((personagem.critico + 100) / 100),
        chanceCritico: (personagem.chanceCritico * 0.5)
    }
    
    return statusRealPersonagem
}

export function verLimiteStatusRealPersonagem() {
    // var limites = {
    //     rankD: 5,
    //     rankC: 30,
    //     rankB: 50,
    //     rankA: 80,
    //     rankS: 100
    // }
    var listaLimites = [5, 30, 50, 80, 100]

    var numLimite = -1
    if (personagem.classe == 'Rank D') {
        numLimite = 0
    } else if (personagem.classe == 'Rank C') {
        numLimite = 1
    } else if (personagem.classe == 'Rank B') {
        numLimite = 2
    } else if (personagem.classe == 'Rank A') {
        numLimite = 3
    } else if (personagem.classe == 'Rank S') {
        numLimite = 4
    }

    if (numLimite != -1) {
        var limiteStatusRealPersonagem = {
            dano: listaLimites[numLimite],
            defesa: listaLimites[numLimite],
            vida: listaLimites[numLimite],
            velocidade: listaLimites[numLimite],
            critico: listaLimites[numLimite],
            chanceCritico: listaLimites[numLimite]
        }
        return limiteStatusRealPersonagem
    } else {
        return alert('Deu erro no calculo do limite de Status')
    }
}