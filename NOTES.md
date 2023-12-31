# Notes

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ Initial Refactor
- ✅ User Stories
- ✅ UAT1.1: User can pass ["a"], it should return [1] 
- ✅ UAT1.2: User can pass ["b"], it should return [0] 
- ✅ UAT1.3: User can pass ["ab"], it should return [2] 
- ✅ UAT1.4: User can pass ["bb"], it should return [1]

Pomodoro 2:
- ✅ UAT1.5: User can pass ["bc"], it should return [0]
- ✅ UAT1.6: User can pass ["abc"], it should return [3]
- ✅ UAT1.7: User can pass ["abcd"], it should return [4]
- ✅ UAT1.8: User can pass ["heyD"], it should return [1]
- ✅ UAT2.1: User can pass ["a","a"], it should return [1,1] 
- ✅ UAT2.2: User can pass ["lol","DOC"], it should return [0,1] 
- ✅ UAT2.3: User can pass ["ABCD","xox","abode"], it should return [4,0,4]
- ✅ UAT3.1: User can pass [], it should return an exception
- ✅ UAT3.2: User can pass null, it should return an exception
- ✅ UAT3.3: User can pass [""," "], it should return [0, 0]