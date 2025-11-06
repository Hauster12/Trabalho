import { Personagem } from "./Personagem.js";

export class Padre extends Personagem {
    constructor(nome: string) {
        super(nome, Math.floor(Math.random() * 8000) + 1, 0, 0, 0, 0, 0);
    }

    atacar(alvo: Personagem): void {
        const chanceConverter = Math.random() < 0.4;
        if (chanceConverter) {
            console.log(`${this.nome} converteu ${alvo.nome}!`);
            alvo.vida = 0;
        } else {
            console.log(`${this.nome} tentou converter ${alvo.nome}, mas falhou.`);
        }
    }

    contraAtacar(alvo: Personagem): void {
        const chanceConverter = Math.random() < 0.4;
        if (chanceConverter) {
            console.log(`${this.nome} contra-atacou e converteu ${alvo.nome}!`);
            alvo.vida = 0;
        } else {
            console.log(`${this.nome} tentou converter ${alvo.nome} no contra-ataque, mas falhou.`);
        }
    }

    aprimorarHabilidade(): void {
        throw new Error("esse personagem não pode executar essa ação");
    }
}