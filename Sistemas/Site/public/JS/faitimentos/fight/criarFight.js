import { verStatusRealPersonagem } from "../../personagem/statusReal.js";
import { criarInimigoBasicoD, verStatusRealInimigoBasicoD } from "../inimigoBasico/inimigoBasico.js";
import { fightInimigoBasico } from "./fightInimigoBasico.js";

export function createFightInimigoBasicoD() {
    var player = verStatusRealPersonagem()
    var inimigo = verStatusRealInimigoBasicoD(criarInimigoBasicoD())
    fightInimigoBasico(player, inimigo)
}