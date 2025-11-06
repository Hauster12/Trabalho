import readline from "readline";
import { Padre } from "./Padre.js";
import { Guerreiro } from "./Guerreiro.js";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function esperarEnter() {
    return new Promise((resolve) => {
        rl.question("Pressione ENTER para o próximo turno...", () => resolve());
    });
}
const nomes = ["Ares", "Leônidas", "Darius", "Ragnar", "Ulric", "Ivan", "Marcus", "Lucian", "Hector", "Drake"];
function nomeAleatorio() {
    return nomes[Math.floor(Math.random() * nomes.length)];
}
const personagens = [
    new Padre("Padre João"),
    new Guerreiro(nomeAleatorio()),
    new Guerreiro(nomeAleatorio())
];
async function batalha(p1, p2) {
    console.log(`\n${p1.nome} (${p1.constructor.name}) vs ${p2.nome} (${p2.constructor.name})\n`);
    while (p1.estaVivo() && p2.estaVivo()) {
        const acao1 = Math.floor(Math.random() * 3);
        const acao2 = Math.floor(Math.random() * 3);
        console.log(`\n--- Novo Turno ---`);
        console.log(`${p1.nome}: ${p1.vida.toFixed(1)} / ${p1.vidaMaxima}`);
        console.log(`${p2.nome}: ${p2.vida.toFixed(1)} / ${p2.vidaMaxima}`);
        if (acao1 === 0)
            p1.atacar(p2);
        else if (acao1 === 1)
            p1.aprimorarHabilidade();
        else if (acao1 === 2)
            p1.regenerarVida();
        if (!p2.estaVivo())
            break;
        // Ação do Personagem 2
        if (acao2 === 0)
            p2.atacar(p1);
        else if (acao2 === 1)
            p2.aprimorarHabilidade();
        else if (acao2 === 2)
            p2.regenerarVida();
        if (!p1.estaVivo())
            break;
        // Contra-ataques (reações)
        if (acao1 === 0) {
            p2.contraAtacar(p1);
            if (!p1.estaVivo())
                break;
        }
        if (acao2 === 0) {
            p1.contraAtacar(p2);
            if (!p2.estaVivo())
                break;
        }
        if (!p1.estaVivo() || !p2.estaVivo())
            break;
        await esperarEnter();
    }
    // Declaração final da vitória/derrota (fora do loop)
    if (p1.estaVivo() && !p2.estaVivo())
        console.log(`\n${p1.nome} venceu!`);
    else if (p2.estaVivo() && !p1.estaVivo())
        console.log(`\n${p2.nome} venceu!`);
    else
        console.log(`\nAmbos caíram!`);
    rl.close();
}
batalha(personagens[0], personagens[1]);
