var saveTagJogador = sessionStorage.TAGJOGADOR_USUARIOFAITIMENTOS
var saveNickname = sessionStorage.NICKNAME_USUARIOFAITIMENTOS
var saveNivel = sessionStorage.NIVEL_USUARIOFAITIMENTOS
var saveFaixaNivel = sessionStorage.FAIXANIVEL_USUARIOFAITIMENTOS
var saveTotalUpgrades = sessionStorage.TOTALUPGRADES_USUARIOFAITIMENTOS
var saveTotalXp = sessionStorage.TOTALXP_USUARIOFAITIMENTOS
var saveXp = sessionStorage.XP_USUARIOFAITIMENTOS
var saveDano = sessionStorage.DANO_USUARIOFAITIMENTOS
var saveDefesa = sessionStorage.DEFESA_USUARIOFAITIMENTOS
var saveVida = sessionStorage.VIDA_USUARIOFAITIMENTOS
var saveVelocidade = sessionStorage.VELOCIDADE_USUARIOFAITIMENTOS
var saveCritico = sessionStorage.CRITICO_USUARIOFAITIMENTOS
var saveChanceCritico = sessionStorage.CHANCECRITICO_USUARIOFAITIMENTOS
var saveClasse = sessionStorage.CLASSE_USUARIOFAITIMENTOS
var saveDtCadastro = sessionStorage.DTCADASTRO_USUARIOFAITIMENTOS

export var personagem = {
    tagJogador: saveTagJogador,
    nickname: saveNickname,
    nivel: parseInt(saveNivel),
    faixaNivel: parseInt(saveFaixaNivel),
    totalUpgrades: parseInt(saveTotalUpgrades),
    totalXp: parseInt(saveTotalXp),
    xp: parseInt(saveXp),
    dano: parseInt(saveDano),
    defesa: parseInt(saveDefesa),
    vida: parseInt(saveVida),
    velocidade: parseInt(saveVelocidade),
    critico: parseInt(saveCritico),
    chanceCritico: parseInt(saveChanceCritico),
    classe: saveClasse,
    dtCadastro: saveDtCadastro
}