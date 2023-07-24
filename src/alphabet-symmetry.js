function alphabetSymmetry(words) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let counter = 0;
  [...words[0]].map((char, index) => {
    alphabet.map((alphabetLetter, alphabetIndex) => {
      if (char.toLowerCase() === alphabetLetter.toLowerCase() && index === alphabetIndex) {
        counter++;
      }
    });
  });
  return [counter];
}

module.exports = alphabetSymmetry;
