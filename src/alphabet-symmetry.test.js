const alphabetSymmetry = require('./alphabet-symmetry');

describe('Story1', () => {
  it('UAT1.1: User can pass ["a"], it should return [1]', () => {
    expect(alphabetSymmetry(['a'])).toStrictEqual([1]);
  });
  it('UAT1.2: User can pass ["b"], it should return [0]', () => {
    expect(alphabetSymmetry(['b'])).toStrictEqual([0]);
  });
  it('UAT1.3: User can pass ["ab"], it should return [2]', () => {
    expect(alphabetSymmetry(['ab'])).toStrictEqual([2]);
  });
  it('UAT1.4: User can pass ["bb"], it should return [1]', () => {
    expect(alphabetSymmetry(['bb'])).toStrictEqual([1]);
  });
  it('UAT1.5: User can pass ["bc"], it should return [0]', () => {
    expect(alphabetSymmetry(['bc'])).toStrictEqual([0]);
  });
});
