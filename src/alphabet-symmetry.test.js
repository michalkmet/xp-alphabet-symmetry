const alphabetSymmetry = require('./alphabet-symmetry');

describe('hello', () => {
  it('UAT1.1: User can pass ["a"], it should return [1]', () => {
    expect(alphabetSymmetry(['a'])).toStrictEqual([1]);
  });
});
