export class Personagem {
    constructor(nome, vida, ataque, armadura, esquiva, forca, poderMental) {
        this.nome = nome;
        this.vida = vida;
        this.vidaMaxima = vida;
        this.ataque = ataque;
        this.armadura = armadura;
        this.esquiva = esquiva;
        this.forca = forca;
        this.poderMental = poderMental;
    }
    regenerarVida() {
        const cura = this.vidaMaxima * 0.1;
        this.vida = Math.min(this.vida + cura, this.vidaMaxima);
        console.log(`${this.nome} regenerou ${cura.toFixed(1)} de vida.`);
    }
    estaVivo() {
        return this.vida > 0;
    }
}
