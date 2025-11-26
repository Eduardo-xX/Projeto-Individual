// Funções para verificar se concluiu alguma conquista

import { personagem } from "../../personagem/personagem.js"
import { listaConquistas } from "./conquistas.js"

export function verificarConquistadas(conquista) {
    var conquistadas = personagem.conquistasFeitas

    for (var i = 0; i < conquistadas.length; i++) {
        if (conquista == conquistadas[i]) {
            return true
        }

    }
    return false
}

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

export function verificarConquistasRanks() {
    if (!verificarConquistadas(1)) {
        if (personagem.classe == 'Rank D') {
            // Conseguiu a conquista
            personagem.conquistasFeitas.push(1)
            var mensagem = `
                <div class="containerMiniTelaConquista">
                    <span class="miniTitleConquista">${listaConquistas[1].nome}</span>
                    <span class="miniSubtileConquista">${listaConquistas[1].descricao}</span>
                    <span class="textConquista">Conquista desbloqueada</span>
                    <span class="recompensas">Recompensa: <span id="textRecompensa">50Xp</span></span>
                </div>
            `

            
            miniTelaConquista.innerHTML = mensagem
            personagem.xp += 50
            personagem.totalXp += 50
            
            var telinhaSprint = document.getElementById('miniTelaConquista')
            console.log(telinhaSprint)
            telinhaSprint.style.zIndex = 5
            telinhaSprint.style.display = 'flex'
            setTimeout(() => {
                telinhaSprint.style.display = 'none'
            }, 3000);
        }
    }
}


// Texto base conquista
{/* <div class="containerMiniTelaConquista">
    <span class="miniTitleConquista">Escudo de Madeira</span>
    <span class="miniSubtileConquista">Rank D</span>
    <span class="textConquista">Conquista desbloqueada</span>
    <span class="recompensas">Recompensa: <span id="textRecompensa">00Xp</span></span>
</div> */}