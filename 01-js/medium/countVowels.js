/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let lowercaseString = str.toLowerCase();
  let vowelCount = 0;
  function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char);
  }
  for (let i = 0; i < lowercaseString.length; i++) {
    if (isVowel(lowercaseString[i])) vowelCount++;
  }

  return vowelCount;
}

module.exports = countVowels;
