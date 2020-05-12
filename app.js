// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"]; // DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine)
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,

    mutate() {
      const dnaBasesToMutate = ["A", "T", "C", "G"];
      const randomToMutate = returnRandBase();
      const mutatedGene = dnaBasesToMutate.splice(
        dnaBasesToMutate.indexOf(randomToMutate),
        1
      ); // gives array of gens to mutate -excluding base gen to mutate
      console.log(dnaBasesToMutate);
      console.log(mutatedGene);

      //find gen within dna array
      this.dna.map((gene, index) => {
        if (gene === mutatedGene[0]) {
          this.dna[index] =
            dnaBasesToMutate[
              Math.floor(Math.random() * dnaBasesToMutate.length)
            ];
        }
      });
    },
  };
};

const one = pAequorFactory(1, mockUpStrand());
console.log(one.dna);
console.log(one.mutate());
console.log(one.dna);
