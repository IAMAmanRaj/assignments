/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowercaseString = str.toLowerCase().replaceAll(" ", "");

  const alphanumericStr = lowercaseString.replace(/[^a-z]/g, "");

  // Reverse the alphanumeric string
  const reversedStr = alphanumericStr.split("").reverse().join("");

  // Check if the original and reversed strings are the same
  return alphanumericStr === reversedStr;
}

module.exports = isPalindrome;
