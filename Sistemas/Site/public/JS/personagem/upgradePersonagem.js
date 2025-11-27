import { attGraficos, attStatusAtuais, attStatusClasse, attStatusNivel } from "../faitimentos.js";
import { verifyTodasConquistas } from "../faitimentos/conquistas/verifyConquista.js";
import { personagem } from "./personagem.js";

export function descobrirProximoRank(rank) {
    var listaRanks = ['Rank D', 'Rank C', 'Rank B', 'Rank A', 'Rank S']

    var indexLista = listaRanks.indexOf(rank)
    var newValor = listaRanks[indexLista + 1]
    if (newValor == listaRanks.length) {
        newValor --
    }
    return newValor
}

export function calcularValorEvolucaoNivel() {
    if (personagem.nivel == 0) {
        return 300
    } else if (personagem.nivel == 1) {
        return 500
    } else if (personagem.nivel == 2) {
        return 800
    } else if (personagem.nivel == 3) {
        return 1000
    } else if (personagem.nivel == 4) {
        return 1500
    } else if (personagem.nivel == 5) {
        return 2000
    } else if (personagem.nivel == 6) {
        return 2500
    } else if (personagem.nivel == 7) {
        return 4000
    } else if (personagem.nivel == 8) {
        return 5000
    } else if (personagem.nivel == 9) {
        return 10000
    } else if (personagem.nivel == 10) {
        return 20000
    } else {
        return false
    }
}

export function calcularValorUpgradeDano() {
    if (personagem.dano >= 80 && personagem.nivel >= 9) {
        return personagem.dano * 50
    } else if (personagem.dano >= 50 && personagem.nivel >= 6) {
        return personagem.dano * 40
    } else if (personagem.dano >= 30 && personagem.nivel >= 3) {
        return personagem.dano * 30
    } else if (personagem.dano >= 5 && personagem.nivel >= 1) {
        return personagem.dano * 20
    } else if (personagem.dano >= 1 && personagem.nivel >= 0) {
        return personagem.dano * 10
    }

}

export function calcularValorUpgradeDefesa() {
    if (personagem.defesa >= 80 && personagem.nivel >= 9) {
        return personagem.defesa * 50
    } else if (personagem.defesa >= 50 && personagem.nivel >= 6) {
        return personagem.defesa * 40
    } else if (personagem.defesa >= 30 && personagem.nivel >= 3) {
        return personagem.defesa * 30
    } else if (personagem.defesa >= 5 && personagem.nivel >= 1) {
        return personagem.defesa * 20
    } else if (personagem.defesa >= 1 && personagem.nivel >= 0) {
        return personagem.defesa * 10
    }
}

export function calcularValorUpgradeVida() {
    if (personagem.vida >= 80 && personagem.nivel >= 9) {
        return personagem.vida * 50
    } else if (personagem.vida >= 50 && personagem.nivel >= 6) {
        return personagem.vida * 40
    } else if (personagem.vida >= 30 && personagem.nivel >= 3) {
        return personagem.vida * 30
    } else if (personagem.vida >= 5 && personagem.nivel >= 1) {
        return personagem.vida * 20
    } else if (personagem.vida >= 1 && personagem.nivel >= 0) {
        return personagem.vida * 10
    }
}

export function calcularValorUpgradeVelocidade() {
    if (personagem.velocidade >= 80 && personagem.nivel >= 9) {
        return personagem.velocidade * 50
    } else if (personagem.velocidade >= 50 && personagem.nivel >= 6) {
        return personagem.velocidade * 40
    } else if (personagem.velocidade >= 30 && personagem.nivel >= 3) {
        return personagem.velocidade * 30
    } else if (personagem.velocidade >= 5 && personagem.nivel >= 1) {
        return personagem.velocidade * 20
    } else if (personagem.velocidade >= 1 && personagem.nivel >= 0) {
        return personagem.velocidade * 10
    }
}

export function calcularValorUpgradeCritico() {
    if (personagem.critico >= 80 && personagem.nivel >= 9) {
        return personagem.critico * 500
    } else if (personagem.critico >= 50 && personagem.nivel >= 6) {
        return personagem.critico * 400
    } else if (personagem.critico >= 30 && personagem.nivel >= 3) {
        return personagem.critico * 300
    } else if (personagem.critico >= 5 && personagem.nivel >= 1) {
        return personagem.critico * 200
    } else if (personagem.critico >= 1 && personagem.nivel >= 0) {
        return personagem.critico * 100
    }
}

export function calcularValorUpgradeChanceCritico() {
    if (personagem.chanceCritico >= 80 && personagem.nivel >= 9) {
        return personagem.chanceCritico * 600
    } else if (personagem.chanceCritico >= 50 && personagem.nivel >= 6) {
        return personagem.chanceCritico * 500
    } else if (personagem.chanceCritico >= 30 && personagem.nivel >= 3) {
        return personagem.chanceCritico * 400
    } else if (personagem.chanceCritico >= 5 && personagem.nivel >= 1) {
        return personagem.chanceCritico * 300
    } else if (personagem.chanceCritico >= 1 && personagem.nivel >= 0) {
        return personagem.chanceCritico * 200
    }
}

export function calcularValorUpgradeClasse(rank) {
    if (rank == 'Rank D') {
        return 100
    } else if (rank == 'Rank C') {
        return 1000
    } else if (rank == 'Rank B') {
        return 5000
    } else if (rank == 'Rank A') {
        return 25000
    }
}

export function calcularNivelUpgradeClasse(rank) {
    if (rank == 'Rank D') {
        return 1
    } else if (rank == 'Rank C') {
        return 3
    } else if (rank == 'Rank B') {
        return 6
    } else if (rank == 'Rank A') {
        return 9
    }
}

export function evoluirClasse() {
    if (personagem.classe == 'Rank D' && personagem.nivel >= calcularNivelUpgradeClasse('Rank D') && personagem.xp >= calcularValorUpgradeClasse('Rank D')) {
        personagem.xp -= 100
        personagem.classe = 'Rank C'
    } else if (personagem.classe == 'Rank C' && personagem.nivel >= calcularNivelUpgradeClasse('Rank C') && personagem.xp >= calcularValorUpgradeClasse('Rank C')) {
        personagem.xp -= 1000
        personagem.classe = 'Rank B'
    } else if (personagem.classe == 'Rank B' && personagem.nivel >= calcularNivelUpgradeClasse('Rank B') && personagem.xp >= calcularValorUpgradeClasse('Rank B')) {
        personagem.xp -= 5000
        personagem.classe = 'Rank A'
    } else if (personagem.classe == 'Rank A' && personagem.nivel >= calcularNivelUpgradeClasse('Rank A') && personagem.xp >= calcularValorUpgradeClasse('Rank A')) {
        personagem.xp -= 25000
        personagem.classe = 'Rank S'
    }

    attStatusClasse()
    attGraficos()
    attStatusAtuais()
    verifyTodasConquistas()
}

export function evoluirLevel() {
    if (calcularValorEvolucaoNivel() != false) {
        if (personagem.faixaNivel >= calcularValorEvolucaoNivel()) {
            personagem.faixaNivel -= calcularValorEvolucaoNivel()
            personagem.nivel ++
            attStatusNivel()
            verifyTodasConquistas()
        }
    }
}

export function upgradeDano() {
    if (
        (personagem.classe == 'Rank D' && personagem.dano < 5) || 
        (personagem.classe == 'Rank C' && personagem.dano < 30) ||
        (personagem.classe == 'Rank B' && personagem.dano < 50) ||
        (personagem.classe == 'Rank A' && personagem.dano < 80) ||
        (personagem.classe == 'Rank S' && personagem.dano < 100)
    ) {
        if (personagem.xp >= calcularValorUpgradeDano()) {
            personagem.xp -= calcularValorUpgradeDano()
            personagem.dano += 1
            personagem.totalUpgrades ++
        }
    }
}

export function upgradeDefesa() {
    if (
        (personagem.classe == 'Rank D' && personagem.defesa < 5) || 
        (personagem.classe == 'Rank C' && personagem.defesa < 30) ||
        (personagem.classe == 'Rank B' && personagem.defesa < 50) ||
        (personagem.classe == 'Rank A' && personagem.defesa < 80) ||
        (personagem.classe == 'Rank S' && personagem.defesa < 100)
    ) {
        if (personagem.xp >= calcularValorUpgradeDefesa()) {
            personagem.xp -= calcularValorUpgradeDefesa()
            personagem.defesa += 1
            personagem.totalUpgrades ++
        }
    }
}

export function upgradeVida() {
    if (
        (personagem.classe == 'Rank D' && personagem.vida < 5) || 
        (personagem.classe == 'Rank C' && personagem.vida < 30) ||
        (personagem.classe == 'Rank B' && personagem.vida < 50) ||
        (personagem.classe == 'Rank A' && personagem.vida < 80) ||
        (personagem.classe == 'Rank S' && personagem.vida < 100)
    ) {
        if (personagem.xp >= calcularValorUpgradeVida()) {
            personagem.xp -= calcularValorUpgradeVida()
            personagem.vida += 1
            personagem.totalUpgrades ++
        }
    }
}

export function upgradeVelocidade() {
    if (
        (personagem.classe == 'Rank D' && personagem.velocidade < 5) || 
        (personagem.classe == 'Rank C' && personagem.velocidade < 30) ||
        (personagem.classe == 'Rank B' && personagem.velocidade < 50) ||
        (personagem.classe == 'Rank A' && personagem.velocidade < 80) ||
        (personagem.classe == 'Rank S' && personagem.velocidade < 100)
    ) {
        if (personagem.xp >= calcularValorUpgradeVelocidade()) {
            personagem.xp -= calcularValorUpgradeVelocidade()
            personagem.velocidade += 1
            personagem.totalUpgrades ++
        }
    }
}

export function upgradeCritico() {
    if (
        (personagem.classe == 'Rank D' && personagem.critico < 5) || 
        (personagem.classe == 'Rank C' && personagem.critico < 30) ||
        (personagem.classe == 'Rank B' && personagem.critico < 50) ||
        (personagem.classe == 'Rank A' && personagem.critico < 80) ||
        (personagem.classe == 'Rank S' && personagem.critico < 100)
    ) {
        if (personagem.xp >= calcularValorUpgradeCritico()) {
            personagem.xp -= calcularValorUpgradeCritico()
            personagem.critico += 1
            personagem.totalUpgrades ++
        }
    }
}

export function upgradeChanceCritico() {
    if (
        (personagem.classe == 'Rank D' && personagem.chanceCritico < 5) || 
        (personagem.classe == 'Rank C' && personagem.chanceCritico < 30) ||
        (personagem.classe == 'Rank B' && personagem.chanceCritico < 50) ||
        (personagem.classe == 'Rank A' && personagem.chanceCritico < 80) ||
        (personagem.classe == 'Rank S' && personagem.chanceCritico < 100)
    ) {
        if (personagem.xp >= calcularValorUpgradeChanceCritico()) {
            personagem.xp -= calcularValorUpgradeChanceCritico()
            personagem.chanceCritico += 1
            personagem.totalUpgrades ++
        }
    }
}