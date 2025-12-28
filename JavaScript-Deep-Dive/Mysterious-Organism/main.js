// Devuelve una base de ADN aleatoria
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Genera un array de 15 bases aleatorias
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// -------------------- Factory function --------------------

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    // Método para mutar ADN
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let currentBase = this.dna[randomIndex];
      let newBase = returnRandBase();

      // Asegurarse que la base nueva sea diferente
      while (newBase === currentBase) {
        newBase = returnRandBase();
      }

      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    // Método para comparar ADN con otro organismo
    compareDNA(otherPAequor) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          identicalBases++;
        }
      }
      const percent = ((identicalBases / this.dna.length) * 100).toFixed(2);
      console.log(
        `specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percent}% DNA in common.`
      );
    },

    // Método para determinar probabilidad de supervivencia
    willLikelySurvive() {
      const cAndG = this.dna.filter(
        (base) => base === "C" || base === "G"
      ).length;
      return cAndG / this.dna.length >= 0.6;
    },
  };
};

// -------------------- Crear 30 organismos sobrevivientes --------------------

const survivingPAequor = [];
let id = 1;

while (survivingPAequor.length < 30) {
  const newOrganism = pAequorFactory(id, mockUpStrand());
  if (newOrganism.willLikelySurvive()) {
    survivingPAequor.push(newOrganism);
  }
  id++;
}

// -------------------- Pruebas --------------------

// Ver algunos organismos
console.log(survivingPAequor);

// Comparar ADN de los primeros dos
survivingPAequor[0].compareDNA(survivingPAequor[1]);

// Verificar si el primero probablemente sobrevive
console.log(survivingPAequor[0].willLikelySurvive());

// Mutar el ADN del primero
console.log("Antes de mutar:", survivingPAequor[0].dna);
survivingPAequor[0].mutate();
console.log("Después de mutar:", survivingPAequor[0].dna);

// Total de organismos sobrevivientes
console.log(`Total survivors: ${survivingPAequor.length}`);
