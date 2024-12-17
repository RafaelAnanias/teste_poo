"use strict";
// Classe abstrata Jogo
class Jogo {
    constructor(titulo, anoPublicacao, fabricante) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.fabricante = fabricante;
    }
}
// Classe concreta JogoTabuleiro
class JogoTabuleiro extends Jogo {
    constructor(titulo, anoPublicacao, fabricante, numeroJogadores) {
        super(titulo, anoPublicacao, fabricante);
        this.numeroJogadores = numeroJogadores;
    }
    exibirRegras() {
        console.log(`Este é um jogo de tabuleiro. Título: ${this.titulo}, Ano de Publicação: ${this.anoPublicacao}, Fabricante: ${this.fabricante}. Número de Jogadores: ${this.numeroJogadores}`);
    }
}
// Classe concreta JogoCarta
class JogoCarta extends Jogo {
    constructor(titulo, anoPublicacao, fabricante, idadeMinima) {
        super(titulo, anoPublicacao, fabricante);
        this.idadeMinima = idadeMinima;
    }
    exibirRegras() {
        console.log(`Este é um jogo de cartas. Título: ${this.titulo}, Ano de Publicação: ${this.anoPublicacao}, Fabricante: ${this.fabricante}. Idade Mínima: ${this.idadeMinima} anos`);
    }
}
// Classe Biblioteca
class Biblioteca {
    constructor() {
        this.jogos = [];
    }
    adicionarJogo(jogo) {
        this.jogos.push(jogo);
    }
    removerJogo(jogo) {
        const index = this.jogos.indexOf(jogo);
        if (index > -1) {
            this.jogos.splice(index, 1);
        }
    }
    listarJogos() {
        console.log("Lista de Jogos:");
        this.jogos.forEach(jogo => {
            console.log(`- ${jogo.constructor.name}: ${jogo.titulo}`);
        });
    }
}
// Exemplo de uso
const biblioteca = new Biblioteca();
const tabuleiro = new JogoTabuleiro("Monopoly", 1935, "Hasbro", 4);
const carta = new JogoCarta("Magic: The Gathering", 1993, "Wizards of the Coast", 13);
biblioteca.adicionarJogo(tabuleiro);
biblioteca.adicionarJogo(carta);
biblioteca.listarJogos();
