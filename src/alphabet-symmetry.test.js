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
  it('UAT1.6: User can pass ["abc"], it should return [3]', () => {
    expect(alphabetSymmetry(['abc'])).toStrictEqual([3]);
  });
  it('UAT1.7: User can pass ["abcd"], it should return [4]', () => {
    expect(alphabetSymmetry(['abcd'])).toStrictEqual([4]);
  });
  it('UAT1.8: User can pass ["heyD"], it should return [1]', () => {
    expect(alphabetSymmetry(['heyD'])).toStrictEqual([1]);
  });
});

describe('Story2', () => {
  it('UAT2.1: User can pass ["a","a"], it should return [1,1]', () => {
    expect(alphabetSymmetry(['a', 'a'])).toStrictEqual([1, 1]);
  });
  it('UAT2.2: User can pass ["lol","DOC"], it should return [0,1]', () => {
    expect(alphabetSymmetry(['lol', 'DOC'])).toStrictEqual([0, 1]);
  });
  it('UAT2.3: User can pass ["ABCD","xox","abode"], it should return [4,0,4]', () => {
    expect(alphabetSymmetry(['ABCD', 'xox', 'abode'])).toStrictEqual([4, 0, 4]);
  });
});

describe('Story3', () => {
  it('UAT3.1: User can pass [], it should return an exception', () => {
    expect(() => alphabetSymmetry([])).toThrow('Wrong input');
  });
});
