# Awesome repo

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Story 1: User can pass one word in array, it will return number of letters at the same position in the world as they have in the alphabet 
- ✅ DONE UAT1.1: User can pass ["a"], it should return [1] 
- ✅ DONE UAT1.2: User can pass ["b"], it should return [0] 
- ✅ DONE UAT1.3: User can pass ["ab"], it should return [2] 
- ✅ DONE UAT1.4: User can pass ["bb"], it should return [1]
- ✅ DONE UAT1.5: User can pass ["bc"], it should return [0]
- ✅ DONE UAT1.6: User can pass ["abc"], it should return [3]
- ✅ DONE UAT1.7: User can pass ["abcd"], it should return [4]
- ✅ DONE UAT1.8: User can pass ["heyD"], it should return [1]

Story 2: User can pass more words in array, it will return array with number of letters at the same position in the world as they have in the alphabet
- ✅ DONE UAT2.1: User can pass ["a","a"], it should return [1,1] 
- ✅ DONE UAT2.2: User can pass ["lol","DOC"], it should return [0,1] 
- ✅ DONE UAT2.3: User can pass ["ABCD","xox","abode"], it should return [4,0,4] 

Story 3: User can pass wrong inputs, it should thrown an exception
- ✅ DONE UAT3.1: User can pass [], it should return an exception
- ✅ DONE UAT3.2: User can pass null, it should return an exception
- ✅ DONE UAT3.3: User can pass [""," "], it should return [0, 0]