import { attStatusClasse, attStatusNivel } from "../faitimentos.js";
import { personagem } from "./personagem.js";

export function calcularValorEvolucaoNivel() {
    if (personagem.classe == 'Rank D' && personagem.nivel == 0) {
        return 300
    } else if (personagem.classe == 'Rank C' && personagem.nivel == 1) {
        return 500
    } else if (personagem.classe == 'Rank C' && personagem.nivel == 2) {
        return 800
    } else if (personagem.classe == 'Rank C' && personagem.nivel == 3) {
        return 1000
    } else if (personagem.classe == 'Rank B' && personagem.nivel == 4) {
        return 1500
    } else if (personagem.classe == 'Rank B' && personagem.nivel == 5) {
        return 2000
    } else if (personagem.classe == 'Rank B' && personagem.nivel == 6) {
        return 2500
    } else if (personagem.classe == 'Rank A' && personagem.nivel == 7) {
        return 4000
    } else if (personagem.classe == 'Rank A' && personagem.nivel == 8) {
        return 5000
    } else if (personagem.classe == 'Rank A' && personagem.nivel == 9) {
        return 10000
    } else if (personagem.classe == 'Rank A' && personagem.nivel == 10) {
        return 20000
    } else {
        return false
    }
}

export function calcularValorUpgradeDano() {
    if (personagem.classe == 'Rank D') {
        return personagem.dano * 10
    } else if (personagem.classe == 'Rank C') {
        return personagem.dano * 20
    } else if (personagem.classe == 'Rank B') {
        return personagem.dano * 30
    } else if (personagem.classe == 'Rank A') {
        return personagem.dano * 40
    } else if (personagem.classe == 'Rank S') {
        return personagem.dano * 50
    }
}

export function calcularValorUpgradeDefesa() {
    if (personagem.classe == 'Rank D') {
        return personagem.defesa * 10
    } else if (personagem.classe == 'Rank C') {
        return personagem.defesa * 20
    } else if (personagem.classe == 'Rank B') {
        return personagem.defesa * 30
    } else if (personagem.classe == 'Rank A') {
        return personagem.defesa * 40
    } else if (personagem.classe == 'Rank S') {
        return personagem.defesa * 50
    }
}

export function calcularValorUpgradeVida() {
    if (personagem.classe == 'Rank D') {
        return personagem.vida * 10
    } else if (personagem.classe == 'Rank C') {
        return personagem.vida * 20
    } else if (personagem.classe == 'Rank B') {
        return personagem.vida * 30
    } else if (personagem.classe == 'Rank A') {
        return personagem.vida * 40
    } else if (personagem.classe == 'Rank S') {
        return personagem.vida * 50
    }
}

export function calcularValorUpgradeVelocidade() {
    if (personagem.classe == 'Rank D') {
        return personagem.velocidade * 50
    } else if (personagem.classe == 'Rank C') {
        return personagem.velocidade * 100
    } else if (personagem.classe == 'Rank B') {
        return personagem.velocidade * 150
    } else if (personagem.classe == 'Rank A') {
        return personagem.velocidade * 200
    } else if (personagem.classe == 'Rank S') {
        return personagem.velocidade * 250
    }
}

export function calcularValorUpgradeCritico() {
    if (personagem.classe == 'Rank D') {
        return personagem.critico * 100
    } else if (personagem.classe == 'Rank C') {
        return personagem.critico * 200
    } else if (personagem.classe == 'Rank B') {
        return personagem.critico * 300
    } else if (personagem.classe == 'Rank A') {
        return personagem.critico * 400
    } else if (personagem.classe == 'Rank S') {
        return personagem.critico * 500
    }
}

export function calcularValorUpgradeChanceCritico() {
    if (personagem.classe == 'Rank D') {
        return personagem.chanceCritico * 300
    } else if (personagem.classe == 'Rank C') {
        return personagem.chanceCritico * 600
    } else if (personagem.classe == 'Rank B') {
        return personagem.chanceCritico * 900
    } else if (personagem.classe == 'Rank A') {
        return personagem.chanceCritico * 1200
    } else if (personagem.classe == 'Rank S') {
        return personagem.chanceCritico * 1500
    }
}

export function evoluirClasse() {
    if (personagem.nivel <= 0) {
        personagem.classe = 'Rank D'
        attStatusClasse()
    } else if (personagem.nivel > 0 && personagem.nivel <= 3) {
        personagem.classe = 'Rank C'
        attStatusClasse()
    } else if (personagem.nivel > 3 && personagem.nivel <= 6) {
        personagem.classe = 'Rank B'
        attStatusClasse()
    } else if (personagem.nivel > 6 && personagem.nivel <= 9) {
        personagem.classe = 'Rank A'
        attStatusClasse()
    } else if (personagem.nivel > 9) {
        personagem.classe = 'Rank S'
        attStatusClasse()
    }
}

export function evoluirLevel() {
    if (calcularValorEvolucaoNivel() != false) {
        if (personagem.faixaNivel >= calcularValorEvolucaoNivel()) {
            personagem.faixaNivel -= calcularValorEvolucaoNivel()
            personagem.nivel ++
            attStatusNivel()
            evoluirClasse()
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
        }
    }
}