function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
  }
    let dnaSequence = "GCTTTCGATCGTAGCTAGCTAGCTGATCGTACGTACGTA";
    let rnaSequence = DNAtoRNA(dnaSequence);
    console.log(rnaSequence);