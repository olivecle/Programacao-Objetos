class hero {
    constructor(tipo, name, idade, armas) {
      this.tipo = tipo;
      this.name = name;
      this.idade = idade;
      this.armas = armas;
    }
  
    apresentar() {
      console.log(`O ${this.tipo} ${this.name} atacou usando ${this.armas}.`);
    }
  }
  
  let tipoHeroi = new hero("mago", "Merlin", 30, "magia");
  let nameHeroi = new hero("guerreiro", "Spartacus", 35, "espada");
  let armasHeroi = new hero("monge", "Chaolin", 25, "artes marciais");
  let ninjaHeroi = new hero("ninja", "Jiraya", 40, "shuriken");
  
  tipoHeroi.apresentar();
  nameHeroi.apresentar();
  armasHeroi.apresentar();
  ninjaHeroi.apresentar();