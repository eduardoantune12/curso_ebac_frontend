class Jogos {
    constructor(nome, genero, tempAteZerar, ano) {
        this.nome = nome;
        this.genero = genero;
        this. tempAteZerar = tempAteZerar;
        this. ano = ano;
    }

    exibirDistribuidora() {
        console.log(`${this.nome}, ${this.genero}, ${this.tempAteZerar} - Ano: ${this.ano}`);
    }
}

// Classe filha: Ps4
class Ps4 extends Jogos {
    constructor(nome, genero, tempAteZerar, ano, dist) {
        super(nome, genero, tempAteZerar, ano);
        this.dist = dist;
    }

    exibirDistribuidora() {
        super.exibirDistribuidora();
        console.log(`Quem distribuiu o jogo: ${this.dist}`);
    }
}

// Classe filha: XboxOne
class XboxOne extends Jogos {
    constructor(nome, genero, tempAteZerar, ano, dist) {
        super(nome, genero, tempAteZerar, ano);
        this.dist = dist;
    }

    exibirDistribuidora() {
        super.exibirDistribuidora();
        console.log(`Quem distribuiu o jogo: ${this.dist}`);
    }
}

const crashBandicoot = new Ps4('Crash Bandicoot', 'Aventura', '6 horas', 2004, 'Universal Studios');
const halo = new XboxOne('Halo', 'FPS', '10 horas', 2001, 'Microsoft Studios');
const godOfWar = new Ps4('God Of War 2018', 'Ação e aventura', '22 Horas', 2018, 'Santa Monica');

// Exibindo as informações
crashBandicoot.exibirDistribuidora();
console.log('---');
halo.exibirDistribuidora();
console.log('---');
godOfWar.exibirDistribuidora();