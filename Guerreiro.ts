import { Personagem } from "./Personagem.js";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
        const forca = Math.floor(Math.random() * 1001);
        const ataque = forca * 10;
        const armadura = Math.floor(Math.random() * 91);
        const esquiva = Math.floor(Math.random() * 51);
        const vida = Math.floor(Math.random() * 40000) + 1;
        super(nome, vida, ataque, armadura, esquiva, forca, 0);
    }

    atacar(alvo: Personagem): void {
        if (Math.random() * 100 < alvo.esquiva) {
            console.log(`${alvo.nome} esquivou do ataque de ${this.nome}!`);
            return;
        }

        const danoBase = this.ataque;
        const danoReduzido = danoBase * (1 - alvo.armadura / 100);
        alvo.vida -= danoReduzido;

        console.log(`${this.nome} causou ${danoReduzido.toFixed(1)} de dano em ${alvo.nome}.`);
    }

    contraAtacar(alvo: Personagem): void {
        if (!this.estaVivo()) return;
        if (Math.random() * 100 < alvo.esquiva) {
            console.log(`${alvo.nome} esquivou do contra-ataque de ${this.nome}!`);
            return;
        }

        const danoBase = this.ataque * 0.5;
        const danoReduzido = danoBase * (1 - alvo.armadura / 100);
        alvo.vida -= danoReduzido;

        console.log(`${this.nome} contra-atacou e causou ${danoReduzido.toFixed(1)} de dano em ${alvo.nome}.`);
    }

    aprimorarHabilidade(): void {
        console.log(`${this.nome} usou Super Força!`);
        this.forca *= 1.1;
        this.ataque = this.forca * 10;
    }
}
