// a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna) {
  let rna = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}
