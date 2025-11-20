export function criarInimigoBasicoD() {
    // Criar dano do bixo 1 a 5
    var danoBixo = parseInt(Math.random() * 5 + 1) 
    // Criar defesa do bixo 1 a 5
    var defesaBixo = parseInt(Math.random() * 5 + 1)
    // Criar vida do bixo 1 a 5
    var vidaBixo = parseInt(Math.random() * 5 + 1)
    // Criar velocidade do bixo 1 a 5
    var velocidadeBixo = parseInt(Math.random() * 5 + 1)
    // Criar crítico do bixo 1 a 5
    var criticoBixo = parseInt(Math.random() * 5 + 1)
    // Criar chance crítico do bixo 1 a 5
    var chanceCriticoBixo = parseInt(Math.random() * 5 + 1)

    // Criar Exp do bixo, soma de todos os stats
    var expBixo = (
        danoBixo +
        defesaBixo +
        vidaBixo +
        velocidadeBixo +
        criticoBixo +
        chanceCriticoBixo
    )

    // Criar xp do bixo, Exp / 3
    var xpBixo = expBixo / 3

    return  {
        nickname: 'Globin Rank D',
        exp: expBixo,
        xp: xpBixo,
        dano: danoBixo,
        defesa: defesaBixo,
        vida: vidaBixo,
        velocidade: velocidadeBixo,
        critico: criticoBixo,
        chanceCritico: chanceCriticoBixo
    }
}

export function verStatusRealInimigoBasicoD(inimigoBasicoD) {
    return {
        nickname: inimigoBasicoD.nickname,
        exp: parseInt(inimigoBasicoD.exp),
        xp: parseInt(inimigoBasicoD.xp),
        dano: (inimigoBasicoD.dano * 2),
        defesa: (inimigoBasicoD.defesa * 1),
        vida: (inimigoBasicoD.vida * 5),
        velocidade: (inimigoBasicoD.velocidade * 1),
        critico: ((inimigoBasicoD.critico + 100) / 100),
        chanceCritico: parseFloat((inimigoBasicoD.chanceCritico * 0.5).toFixed(1))
    }
}
