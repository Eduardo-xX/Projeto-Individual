// Funções para verificar se concluiu alguma conquista

import { personagem } from "../../personagem/personagem.js"
import { listaConquistas } from "./conquistas.js"

// Verifica se você já tem a conquista que foi passada no parâmetro (indice)
export function verificarConquistadas(conquista) {
    var conquistadas = personagem.conquistasFeitas

    for (var i = 0; i < conquistadas.length; i++) {
        if (conquista == conquistadas[i]) {
            return true
        }
    }
    return false
}

// Verifica as conquistas que você já tem no seu perfil e troca as classes para ficar claro na tela de conquistas
export function verificarTodasConquistas() {
    // colocar todas as vericações
    var totalConquistas = 20
    var quantityConquistadas = 0
    for (var i = 1; i < totalConquistas; i++) {
        if (verificarConquistadas(i)) { // Conquista 1 - Rank D...
            quantityConquistadas++        
            document.getElementById(`containerConquista_${i}`).classList.remove('containerNConquistada')
            document.getElementById(`containerConquista_${i}`).classList.add('containerConquistada')
        }
    }
    document.getElementById('quantidadeConquistas').textContent = `${quantityConquistadas}/${totalConquistas}`
    document.getElementById('idTotalConquistas').textContent = `${quantityConquistadas}`

}

// Verifica se você conquistou mais algumas (todas incluídas)
export function verifyTodasConquistas() {
    verificarConquistasRanks()
    verificarConquistasUpgrades()
    verificarConquistasNiveis()
    verificarConquistasConquistas()
}

// função base para verificar o requisito das conquistas de rank e se atendidas adicionar no perfil
function puxarVerificarConquistasRanks(idConquista, rank, indiceConquista, xp) {
    if (!verificarConquistadas(idConquista)) {
        if (personagem.classe == rank) {
            // Conseguiu a conquista
            personagem.conquistasFeitas.push(idConquista)
            var mensagem = `
                <div class="containerMiniTelaConquista">
                    <span class="miniTitleConquista">${listaConquistas[indiceConquista].nome}</span>
                    <span class="miniSubtileConquista">${listaConquistas[indiceConquista].descricao}</span>
                    <span class="textConquista">Conquista desbloqueada</span>
                    <span class="recompensas">Recompensa: <span id="textRecompensa">${xp}Xp</span></span>
                </div>
            `
            miniTelaConquista.innerHTML = mensagem
            personagem.xp += xp
            personagem.totalXp += xp
            
            var telinhaSprint = document.getElementById('miniTelaConquista')
                telinhaSprint.style.display = 'flex'
            setTimeout(() => {
                telinhaSprint.style.display = 'none'
            }, 3000);
        } 
    }
}

// função base para verificar o requisito das conquistas de upgrades e se atendidas adicionar no perfil
function puxarVerificarConquistasUpgrades(idConquista, totalUpgradesN, indiceConquista, xp) {
    if (!verificarConquistadas(idConquista)) {
        if (personagem.totalUpgrades >= totalUpgradesN) {
            personagem.conquistasFeitas.push(idConquista)
            var mensagem = `
                <div class="containerMiniTelaConquista">
                    <span class="miniTitleConquista">${listaConquistas[indiceConquista].nome}</span>
                    <span class="miniSubtileConquista">${listaConquistas[indiceConquista].descricao}</span>
                    <span class="textConquista">Conquista desbloqueada</span>
                    <span class="recompensas">Recompensa: <span id="textRecompensa">${xp}Xp</span></span>
                </div>
            `
            miniTelaConquista.innerHTML = mensagem
            personagem.xp += xp
            personagem.totalXp += xp
            
            var telinhaSprint = document.getElementById('miniTelaConquista')
                telinhaSprint.style.display = 'flex'
            setTimeout(() => {
                telinhaSprint.style.display = 'none'
            }, 3000);
        }
    }
}

// função base para verificar o requisito das conquistas de niveis e se atendidas adicionar no perfil
function puxarVerificarConquistasNiveis(idConquista, nivel, indiceConquista, xp) {
    if (!verificarConquistadas(idConquista)) {
        if (personagem.nivel >= nivel) {
            personagem.conquistasFeitas.push(idConquista)
            var mensagem = `
                <div class="containerMiniTelaConquista">
                    <span class="miniTitleConquista">${listaConquistas[indiceConquista].nome}</span>
                    <span class="miniSubtileConquista">${listaConquistas[indiceConquista].descricao}</span>
                    <span class="textConquista">Conquista desbloqueada</span>
                    <span class="recompensas">Recompensa: <span id="textRecompensa">${xp}Xp</span></span>
                </div>
            `
            miniTelaConquista.innerHTML = mensagem
            personagem.xp += xp
            personagem.totalXp += xp
            
            var telinhaSprint = document.getElementById('miniTelaConquista')
                telinhaSprint.style.display = 'flex'
            setTimeout(() => {
                telinhaSprint.style.display = 'none'
            }, 3000);
        }
    }
}

// função base para verificar o requisito das conquistas de conquistas e se atendidas adicionar no perfil
function puxarVerificarConquistasConquistas(idConquista, conquistas, indiceConquista, xp) {
    if (!verificarConquistadas(idConquista)) {
        if (personagem.totalConquistas >= conquistas) {
            personagem.conquistasFeitas.push(idConquista)
            var mensagem = `
                <div class="containerMiniTelaConquista">
                    <span class="miniTitleConquista">${listaConquistas[indiceConquista].nome}</span>
                    <span class="miniSubtileConquista">${listaConquistas[indiceConquista].descricao}</span>
                    <span class="textConquista">Conquista desbloqueada</span>
                    <span class="recompensas">Recompensa: <span id="textRecompensa">${xp}Xp</span></span>
                </div>
            `
            miniTelaConquista.innerHTML = mensagem
            personagem.xp += xp
            personagem.totalXp += xp
            
            var telinhaSprint = document.getElementById('miniTelaConquista')
                telinhaSprint.style.display = 'flex'
            setTimeout(() => {
                telinhaSprint.style.display = 'none'
            }, 3000);
        }
    }
}

export function verificarConquistasRanks() {
    
    puxarVerificarConquistasRanks(1, 'Rank D', 0, 50)
    puxarVerificarConquistasRanks(2, 'Rank C', 1, 300)
    puxarVerificarConquistasRanks(3, 'Rank B', 2, 800)
    puxarVerificarConquistasRanks(4, 'Rank A', 3, 1500)
    puxarVerificarConquistasRanks(5, 'Rank S', 4, 3000)
}

export function verificarConquistasUpgrades() {
    puxarVerificarConquistasUpgrades(6, 15, 5, 500)
    puxarVerificarConquistasUpgrades(7, 30, 6, 2000)
    puxarVerificarConquistasUpgrades(8, 70, 7, 10000)
    puxarVerificarConquistasUpgrades(9, 100, 8, 50000)
    puxarVerificarConquistasUpgrades(10, 150, 9, 300000)
}

export function verificarConquistasNiveis() {
    puxarVerificarConquistasNiveis(11, 1, 10, 300)
    puxarVerificarConquistasNiveis(12, 3, 11, 5000)
    puxarVerificarConquistasNiveis(13, 5, 12, 15000)
    puxarVerificarConquistasNiveis(14, 8, 13, 50000)
    puxarVerificarConquistasNiveis(15, 10, 14, 300000)
}

export function verificarConquistasConquistas() {
    puxarVerificarConquistasConquistas(16, 5, 15, 10000)
    puxarVerificarConquistasConquistas(17, 10, 16, 50000)
    puxarVerificarConquistasConquistas(18, 15, 17, 150000)
    puxarVerificarConquistasConquistas(19, 20, 18, 300000)
    puxarVerificarConquistasConquistas(20, 25, 19, 800000)
}


// Texto base conquista
/* <div class="containerMiniTelaConquista">
    <span class="miniTitleConquista">Escudo de Madeira</span>
    <span class="miniSubtileConquista">Rank D</span>
    <span class="textConquista">Conquista desbloqueada</span>
    <span class="recompensas">Recompensa: <span id="textRecompensa">00Xp</span></span>
</div> */