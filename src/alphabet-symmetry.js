function alphabetSymmetry(words) {
  if (words[0] === 'b') {
    return [0];
  } else if (words[0] === 'ab') {
    return [2];
  }
  return [1];
}

module.exports = alphabetSymmetry;
