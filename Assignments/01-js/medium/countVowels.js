/*
 Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
 Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

 Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Declare an array called `arrs` to hold the characters of the string.
  const arrs = str.split('');

  // Initialize a variable called `count` to keep track of the number of vowels.
  let count = 0;

  // Iterate over each character in the `arrs` array.
  for (let arr of arrs) {
    // Convert the current character to lowercase using the `toLowerCase` method.
    arr = arr.toLowerCase();

    // Check if the current character is a vowel by comparing it to each vowel ('a', 'e', 'i', 'o', 'u').
    if (arr == 'a' || arr == 'e' || arr == 'i' || arr == 'o' || arr == 'u') {
      // If the current character is a vowel, increment the `count` variable.
      count++;
    }
  }

  // Return the total number of vowels in the string.
  return count;
}

module.exports = countVowels;