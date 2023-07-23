const alphabetSymmetry = require('./alphabet-symmetry');

describe('Story1', () => {
  it('UAT1.1: User can pass ["a"], it should return [1]', () => {
    expect(alphabetSymmetry(['a'])).toStrictEqual([1]);
  });
  it('UAT1.2: User can pass ["b"], it should return [0]', () => {
    expect(alphabetSymmetry(['b'])).toStrictEqual([0]);
  });
});
