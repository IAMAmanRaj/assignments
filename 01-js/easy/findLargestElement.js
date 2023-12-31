/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  numbers.sort((a, b) => a - b);
  const n = numbers.length;
  return numbers[n - 1];
}

module.exports = findLargestElement;
