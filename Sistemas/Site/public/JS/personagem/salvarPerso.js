import { personagem } from "./personagem.js"

export function salvarPersonagem() {
    var idUsuarioGameVar = sessionStorage.ID_USUARIOCONTAFAITIMENTOS
    var idUsuarioVar = sessionStorage.ID_USUARIO
    var nivelVar = personagem.nivel
    var faixaNivelVar = personagem.faixaNivel
    var totalUpgradesVar = personagem.totalUpgrades
    var totalXpVar = personagem.totalXp
    var xpVar = personagem.xp
    var danoVar = personagem.dano
    var defesaVar = personagem.defesa
    var vidaVar = personagem.vida
    var velocidadeVar = personagem.velocidade
    var criticoVar = personagem.critico
    var chanceCriticoVar = personagem.chanceCritico
    var conquistasFeitasVar = personagem.conquistasFeitas
    var classeVar = personagem.classe

    if (
        idUsuarioGameVar == '' ||
        idUsuarioVar == '' ||
        danoVar == '' ||
        defesaVar == '' ||
        vidaVar == '' ||
        velocidadeVar == '' ||
        criticoVar == '' ||
        chanceCriticoVar == '' ||
        conquistasFeitasVar == '' ||
        classeVar == ''
    ) {
        alert('Informações não encontradas.')
        return
    }

    if (
        (nivelVar == '' && nivelVar != 0) ||
        (faixaNivelVar == '' && faixaNivelVar != 0) ||
        (totalUpgradesVar == '' && totalUpgradesVar != 0) ||
        (totalXpVar == '' && totalXpVar != 0) ||
        (xpVar == '' && xpVar != 0)
    ) {
        alert('Informações não encontradas.')
        return
    }

    fetch('faitimentos/salvar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idUsuarioGameServer: idUsuarioGameVar, 
            idUsuarioServer: idUsuarioVar,
            nivelServer: nivelVar,
            faixaNivelServer: faixaNivelVar,
            totalUpgradesServer: totalUpgradesVar,
            totalXpServer: totalXpVar,
            xpServer: xpVar,
            danoServer: danoVar,
            defesaServer: defesaVar,
            vidaServer: vidaVar,
            velocidadeServer: velocidadeVar,
            criticoServer: criticoVar,
            chanceCriticoServer: chanceCriticoVar,
            conquistasFeitasServer: conquistasFeitasVar,
            classeServer: classeVar
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                alert('Perfil Salvo!')
            } else {
                alert('Erro ao Salvar.')
            }
        }).catch(function (erro) {
            console.log(erro)
        })
    
    return false
}