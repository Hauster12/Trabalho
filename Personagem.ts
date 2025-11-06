export abstract class Personagem {
    nome: string;
    vida: number;
    vidaMaxima: number;
    ataque: number;
    armadura: number;
    esquiva: number;
    forca: number;
    poderMental: number;

    constructor(nome: string, vida: number, ataque: number, armadura: number, esquiva: number, forca: number, poderMental: number) {
        this.nome = nome;
        this.vida = vida;
        this.vidaMaxima = vida;
        this.ataque = ataque;
        this.armadura = armadura;
        this.esquiva = esquiva;
        this.forca = forca;
        this.poderMental = poderMental;
    }

    abstract atacar(alvo: Personagem): void;
    abstract contraAtacar(alvo: Personagem): void;
    abstract aprimorarHabilidade(): void;

    regenerarVida(): void {
        const cura = this.vidaMaxima * 0.1;
        this.vida = Math.min(this.vida + cura, this.vidaMaxima);
        console.log(`${this.nome} regenerou ${cura.toFixed(1)} de vida.`);
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}
