function smashWords(words) {
    return words.join(' ').trim();
  }
  const words = ['If', 'Tinubu', 'wins', 'the', 'election', ',', 'I', 'am', 'leaving', 'this', 'country.'];
  const sentence = smashWords(words);
  console.log(sentence);
  