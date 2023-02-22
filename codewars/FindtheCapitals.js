function findCapitalIndexes(word) {
    const indexes = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        indexes.push(i);
      }
    }
    return indexes;
  }
  const word = "IfTinubuWinsTheElectionI'mLeavingThisCountry";
  const capitalIndexes = findCapitalIndexes(word);
  console.log(capitalIndexes);  