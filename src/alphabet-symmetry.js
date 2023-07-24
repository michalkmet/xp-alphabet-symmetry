function alphabetSymmetry(words) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = [];
  words.forEach((word) => {
    let counter = 0;
    [...word].map((char, index) => {
      alphabet.map((alphabetLetter, alphabetIndex) => {
        if (char.toLowerCase() === alphabetLetter.toLowerCase() && index === alphabetIndex) {
          counter++;
        }
      });
    });
    result.push(counter);
  });

  return result;
}

module.exports = alphabetSymmetry;
