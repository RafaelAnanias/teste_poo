// Classe abstrata Jogo
abstract class Jogo {
    constructor(public titulo: string, public anoPublicacao: number, public fabricante: string) {}
  
    abstract exibirRegras(): void;
  }
  
  // Classe concreta JogoTabuleiro
  class JogoTabuleiro extends Jogo {
    constructor(titulo: string, anoPublicacao: number, fabricante: string, public numeroJogadores: number) {
      super(titulo, anoPublicacao, fabricante);
    }
  
    exibirRegras(): void {
      console.log(`Este é um jogo de tabuleiro. Título: ${this.titulo}, Ano de Publicação: ${this.anoPublicacao}, Fabricante: ${this.fabricante}. Número de Jogadores: ${this.numeroJogadores}`);
    }
  }
  
  // Classe concreta JogoCarta
  class JogoCarta extends Jogo {
    constructor(titulo: string, anoPublicacao: number, fabricante: string, public idadeMinima: number) {
      super(titulo, anoPublicacao, fabricante);
    }
  
    exibirRegras(): void {
      console.log(`Este é um jogo de cartas. Título: ${this.titulo}, Ano de Publicação: ${this.anoPublicacao}, Fabricante: ${this.fabricante}. Idade Mínima: ${this.idadeMinima} anos`);
    }
  }
  
  // Classe Biblioteca
  class Biblioteca {
    private jogos: Jogo[];
  
    constructor() {
      this.jogos = [];
    }
  
    adicionarJogo(jogo: Jogo): void {
      this.jogos.push(jogo);
    }
  
    removerJogo(jogo: Jogo): void {
      const index = this.jogos.indexOf(jogo);
      if (index > -1) {
        this.jogos.splice(index, 1);
      }
    }
  
    listarJogos(): void {
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
  