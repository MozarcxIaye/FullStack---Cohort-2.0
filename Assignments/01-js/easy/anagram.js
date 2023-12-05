/**
 * Function to check if two strings are anagrams of each other.
 * 
 * @param {string} str1 - The first string to be checked.
 * @param {string} str2 - The second string to be checked.
 * @returns {boolean} - True if both strings are anagrams of each other, False otherwise.
 * 
 * Anagram Definition:
 * - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
 */
function isAnagram(str1, str2) {
  // Create an array representation of both strings after sorting them alphabetically.
  let arr1 = sort(str1);
  let arr2 = sort(str2);

  // Compare the sorted arrays of both strings.
  // If they are equal, then both strings are anagrams of each other.
  return arr1 == arr2;

}

/**
 * Function to sort a string alphabetically and return it as an array.
 * 
 * @param {string} str - The string to be sorted.
 * @returns {Array} - The sorted array representation of the string.
 */
function sort(str) {
  // Convert the string to lowercase.
  // Split the string into an array of characters.
  // Sort the array alphabetically.
  // Join the array back into a string.
  return str.toLowerCase().split('').sort().join('');
}

module.exports = isAnagram;