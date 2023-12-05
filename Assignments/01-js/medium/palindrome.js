/*
 Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
 Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove all non-word characters (spaces, punctuation) from the input string.
  let regStr = str.replace(/\W/g, '');

  // Reverse the modified string by iterating from the end to the beginning and concatenating each character.
  let emptyArr = '';
  for (let i = regStr.length - 1; i >= 0; i--) {
    emptyArr += regStr[i];
  }

  // Convert both the original string and the reversed string to lowercase.
  let originalStr = regStr.toLowerCase();
  let reversedStr = emptyArr.toLowerCase();

  // Compare the original string and the reversed string.
  // If they are the same, the input string is a palindrome. Otherwise, it is not.
  return (originalStr === reversedStr) ? true : false;
}

module.exports = isPalindrome;