/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replaceAll(" ", "");
  str2 = str2.toLowerCase().replaceAll(" ", "");

  let n1 = str1.length;
  let n2 = str2.length;

  if (n1 != n2) return false;

  sorted1 = str1.split("").sort().join(""); //sorts the array of  chars;
  sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

module.exports = isAnagram;
