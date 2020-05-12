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
      );
      //find gene within dna array
      this.dna.map((gene, index) => {
        if (gene === mutatedGene[0]) {
          this.dna[index] =
            dnaBasesToMutate[
              Math.floor(Math.random() * dnaBasesToMutate.length)
            ];
        }
      });
    },

    compareDNA(obj) {
      // compare this.dna and obj.dna and return percetage of DNA they two have in common.
      let sharedDNA = 0;
      this.dna.forEach((item, index) => {
        if (item === obj.dna[index]) {
          sharedDNA++;
        }
      });

      const comparedDNA = (sharedDNA / this.dna.length) * 100;
      const message = `Secimen #${this.specimenNum} and specimen #${
        obj.specimenNum
      }: have ${comparedDNA.toFixed(2)}% DNA in common.`;

      console.log(message);
    },

    willLikelySurvive() {
      //checks if specimen has at least 60% of 'C' or 'G' bases.
      let sumUpGenes = 0;
      this.dna.forEach((item) => {
        if (item === "G" || item === "C") {
          sumUpGenes++;
        }
      });
      const chanceOfSurvival = (sumUpGenes / this.dna.length) * 100;

      if (chanceOfSurvival >= 60) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    },
  };
};

const createXinstances = (x) => {
  const emptyArr = new Array(x);
  for (let i = 0; i < emptyArr.length; i++) {
    emptyArr[i] = pAequorFactory(i + 1, mockUpStrand());
  }
  return emptyArr;
};

const instancesForResarch = createXinstances(30);
console.log(instancesForResarch);
