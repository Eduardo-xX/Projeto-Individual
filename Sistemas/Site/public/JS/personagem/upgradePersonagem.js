import { personagem } from "./personagem.js";

export function calcularValorUpgradeDano() {
    return personagem.dano * 10
}

export function calcularValorUpgradeDefesa() {
    return personagem.defesa * 10
}

export function calcularValorUpgradeVida() {
    return personagem.vida * 2
}

export function calcularValorUpgradeVelocidade() {
    return personagem.velocidade * 50
}

export function calcularValorUpgradeCritico() {
    return personagem.critico * 100
}

export function calcularValorUpgradeChanceCritico() {
    return personagem.chanceCritico * 300
}

export function upgradeDano() {
    if (personagem.xp >= calcularValorUpgradeDano()) {
        personagem.xp -= calcularValorUpgradeDano()
        personagem.dano += 1
    }
}

export function upgradeDefesa() {
    if (personagem.xp >= calcularValorUpgradeDefesa()) {
        personagem.xp -= calcularValorUpgradeDefesa()
        personagem.defesa += 1
    }
}

export function upgradeVida() {
    if (personagem.xp >= calcularValorUpgradeVida()) {
        personagem.xp -= calcularValorUpgradeVida()
        personagem.vida += 5
    }
}

export function upgradeVelocidade() {
    if (personagem.xp >= calcularValorUpgradeVelocidade()) {
        personagem.xp -= calcularValorUpgradeVelocidade()
        personagem.velocidade += 1
    }
}

export function upgradeCritico() {
    if (personagem.xp >= calcularValorUpgradeCritico()) {
        personagem.xp -= calcularValorUpgradeCritico()
        personagem.critico += 1
    }
}

export function upgradeChanceCritico() {
    if (personagem.xp >= calcularValorUpgradeChanceCritico()) {
        personagem.xp -= calcularValorUpgradeChanceCritico()
        personagem.chanceCritico += 1
    }
}